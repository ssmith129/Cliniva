import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

/**
 * Application title strategy.
 *
 * Produces document titles of the form `Cliniva Health - <Page>`, e.g.
 * `Cliniva Health - Admin Dashboard`. The page portion is taken from an
 * explicit route `title` when one is defined; otherwise it is derived from the
 * URL so every one of the app's routes gets a meaningful title without having
 * to annotate each route individually.
 */
@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  private static readonly BRAND = 'Cliniva Health';

  /** URL segments that add no meaning to a page name and are dropped. */
  private static readonly IGNORED_SEGMENTS = new Set([
    'main',
    'index',
    'home',
    'list',
    'default',
  ]);

  /** Prettified labels for slugs that don't title-case cleanly. */
  private static readonly LABEL_OVERRIDES: Record<string, string> = {
    signin: 'Sign In',
    signup: 'Sign Up',
    'forgot-password': 'Forgot Password',
    'two-factor': 'Two Factor Authentication',
    page404: 'Page Not Found',
    page500: 'Server Error',
    ui: 'UI',
    hr: 'HR',
    faqs: 'FAQs',
  };

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const routeTitle = this.buildTitle(snapshot);
    const page = routeTitle ?? this.pageFromUrl(snapshot.url);

    this.title.setTitle(
      page ? `${AppTitleStrategy.BRAND} - ${page}` : AppTitleStrategy.BRAND
    );
  }

  /** Derive a human-readable page name from the current URL. */
  private pageFromUrl(url: string): string {
    const segments = url
      .split(/[?#]/)[0]
      .split('/')
      .filter((segment) => segment.length > 0)
      .filter((segment) => !this.isId(segment))
      .filter(
        (segment) =>
          !AppTitleStrategy.IGNORED_SEGMENTS.has(segment.toLowerCase())
      )
      .map((segment) => this.humanize(segment))
      .join(' ')
      .split(' ');

    // Collapse consecutive duplicate words, e.g. `doctor/doctor-dashboard`
    // -> `Doctor Dashboard` instead of `Doctor Doctor Dashboard`.
    const deduped = segments.filter(
      (word, index) => word.toLowerCase() !== segments[index - 1]?.toLowerCase()
    );

    return deduped.join(' ');
  }

  /** True for numeric or UUID-like path segments that shouldn't appear in a title. */
  private isId(segment: string): boolean {
    return /^\d+$/.test(segment) || /^[0-9a-f]{8}-[0-9a-f]{4}/i.test(segment);
  }

  /** Convert a kebab-case / camelCase slug into a Title Case label. */
  private humanize(segment: string): string {
    const key = segment.toLowerCase();
    if (AppTitleStrategy.LABEL_OVERRIDES[key]) {
      return AppTitleStrategy.LABEL_OVERRIDES[key];
    }

    return segment
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[-_]+/g, ' ')
      .trim()
      .split(' ')
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
