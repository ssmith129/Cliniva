import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private authService = inject(AuthService);

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    // The application no longer requires a manual sign-in. Guarantee a default
    // session exists (provisioning it when needed) and always allow navigation
    // so the landing page — and the rest of the app — is viewable directly.
    this.authService.ensureSession();
    return true;
  }
}
