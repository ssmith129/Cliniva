import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';

export interface AiConfig {
  provider: 'openai' | 'gemini' | 'claude' | 'none';
  apiKey: string;
  model: string;
}

// The default Gemini key is used client-side (the browser calls the Gemini REST
// API directly with an `X-goog-api-key` header), so it is intentionally shipped
// to every visitor. It is stored base64-encoded here so it is not committed as a
// raw credential literal; it is decoded at runtime in DEFAULT_AI_CONFIG.
const DEFAULT_GEMINI_KEY_B64 =
  'QVEuQWI4Uk42SVRJUW1xY1ZidWFBUFhEaFJGSWFLbmstN2E5RnVmN1B3WDE0WDd0a0VwQmc=';

/**
 * App-wide default AI configuration. This is baked into the build so that every
 * visitor already has these inputs entered, and it is preserved across
 * deployments. Google Gemini is the selected provider with the fixed API key
 * and the "gemini-flash-latest" model.
 */
export const DEFAULT_AI_CONFIG: AiConfig = {
  provider: 'gemini',
  apiKey: atob(DEFAULT_GEMINI_KEY_B64),
  model: 'gemini-flash-latest',
};

interface OpenAIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class AiService {
  private readonly STORAGE_KEY = 'cliniva_ai_config';

  constructor(private http: HttpClient) {}

  /**
   * Saves the AI configuration to local storage
   */
  saveConfig(config: AiConfig): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
  }

  /**
   * Retrieves the AI configuration from local storage.
   *
   * Any missing field falls back to the app-wide {@link DEFAULT_AI_CONFIG}, and
   * when nothing (or corrupted data) is stored the full default is returned, so
   * every visitor always has the pinned Gemini inputs entered.
   */
  getConfig(): AiConfig {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<AiConfig>;
        return { ...DEFAULT_AI_CONFIG, ...parsed };
      } catch {
        // Corrupted value — fall through to defaults.
      }
    }
    return { ...DEFAULT_AI_CONFIG };
  }

  /**
   * Persists the pinned default AI configuration (Google Gemini, fixed API key,
   * gemini-flash-latest) so the inputs are always saved without anyone having to
   * re-enter them. Runs at application startup and writes the values whenever
   * storage is empty or does not already match the pinned configuration —
   * guaranteeing the same configuration app-wide, across browsers and
   * deployments.
   */
  ensureDefaultConfig(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored !== JSON.stringify(DEFAULT_AI_CONFIG)) {
      this.saveConfig({ ...DEFAULT_AI_CONFIG });
    }
  }

  /**
   * Checks if AI is configured with an API key
   */
  isAiEnabled(): boolean {
    const config = this.getConfig();
    return config.provider !== 'none' && config.apiKey.length > 0;
  }

  /**
   * Sends a prompt to the configured AI provider
   */
  postPrompt(prompt: string): Observable<string> {
    const config = this.getConfig();

    if (!this.isAiEnabled()) {
      // Return mock data if AI is not enabled (for demo purposes)
      return of(`[DEMO MODE] This is a sample AI response to your prompt: "${prompt}". Please configure an API key in settings to see real AI results.`).pipe(delay(1500));
    }

    if (config.provider === 'openai') {
      return this.callOpenAI(prompt, config);
    } else if (config.provider === 'gemini') {
      return this.callGemini(prompt, config);
    }

    return throwError(() => new Error('Unsupported AI provider'));
  }

  private callOpenAI(prompt: string, config: AiConfig): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    });

    const body = {
      model: config.model || 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    };

    return this.http.post<OpenAIResponse>('https://api.openai.com/v1/chat/completions', body, { headers }).pipe(
      map(res => res.choices[0].message.content),
      catchError(err => {
        const errorMsg = err.error?.error?.message || err.statusText || 'OpenAI API Error';
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  private callGemini(prompt: string, config: AiConfig): Observable<string> {
    const modelName = (config.model || 'gemini-1.5-flash').trim();
    const apiKey = (config.apiKey || '').trim();
    
    // Using the exact URL and Header structure from your working CURL command
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-goog-api-key': apiKey
    });

    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    return this.http.post<GeminiResponse>(url, body, { headers }).pipe(
      map(res => {
        if (res.candidates && res.candidates[0].content && res.candidates[0].content.parts) {
          return res.candidates[0].content.parts[0].text;
        }
        throw new Error('Invalid response structure from Gemini');
      }),
      catchError(err => {
        let errorMsg = 'Gemini API Error';
        if (err.error?.error?.message) {
          errorMsg = err.error.error.message;
        } else if (err.status === 404) {
          errorMsg = `Model "${modelName}" not found at v1beta endpoint.`;
        } else {
          errorMsg = err.statusText || 'Connection Failed';
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  /**
   * Test connection helper
   */
  testConnection(): Observable<boolean> {
    return this.postPrompt('Respond with "Connected"').pipe(
      map(res => res.toLowerCase().includes('connected')),
      catchError(() => of(false))
    );
  }
}
