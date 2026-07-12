import { Injectable, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { User } from '@core/models/interface';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { LocalStorageService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenService = inject(TokenService);
  private loginService = inject(LoginService);
  private store = inject(LocalStorageService);

  currentUser = signal<User>(this.store.get<User>('currentUser') || { roles: [], permissions: [] });

  private change$ = toObservable(this.currentUser);

  change() {
    return this.change$;
  }

  login(username: string, password: string, rememberMe = false) {
    return this.loginService.login(username, password, rememberMe).pipe(
      switchMap((_response) => {
        const returnValue = JSON.parse(JSON.stringify(_response))['token'];
        const roleData: { name: string; priority: number }[] = JSON.parse(JSON.stringify(_response))['user'][
          'roles'
        ];
        roleData.sort((a: { priority: number }, b: { priority: number }) => {
          const aPri: number = a['priority'];
          const bPri: number = b['priority'];
          if (aPri > bPri) return 1;
          else if (aPri < bPri) return -1;
          else return 0;
        });
        this.tokenService.roleArray = roleData;
        this.tokenService.permissionArray = JSON.parse(
          JSON.stringify(_response)
        )['user']['permissions'];

        this.currentUser.set(JSON.parse(JSON.stringify(_response))['user']);
        this.store.set('currentUser', _response.user);

        // Store role names in a new array
        const roleNames = this.tokenService.roleArray.map(
          (role: { name: string }) => role.name
        );

        const roleNamesJSON = JSON.stringify(roleNames);

        // Store the JSON string in LocalStorage
        this.store.set('roleNames', roleNamesJSON);

        this.tokenService.set(returnValue);

        return of(_response); // Return the response to be handled in the component
      })
    );
  }

  check() {
    return this.tokenService.valid();
  }

  /**
   * Ensures an authenticated session exists so the application can be viewed
   * without a manual sign-in. When no valid user is stored yet, a default
   * administrator session is provisioned automatically. An existing session
   * (e.g. one restored from storage) is left untouched.
   */
  ensureSession(): void {
    const existing = this.store.get<User>('currentUser');
    if (existing && Array.isArray(existing.roles) && existing.roles.length > 0) {
      return;
    }
    // Provision the default administrator session (mock credentials). This runs
    // synchronously for the in-memory login service, so the session is in place
    // before route guards evaluate.
    this.login('clinivaAdmin', 'admin@123').subscribe();
  }

  logout() {
    // remove user from local storage to log user out
    this.store.clear();
    this.tokenService.clear();
    this.currentUser.set({ roles: [], permissions: [] });
    return of({ success: false });
  }
}
