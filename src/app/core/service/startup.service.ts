import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AiService } from './ai.service';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { User } from '@core/models/interface';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private rolesService = inject(NgxRolesService);
  private permissonsService = inject(NgxPermissionsService);
  private authService = inject(AuthService);
  private aiService = inject(AiService);


  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */

  // load(user: User) {
  //   return this.setPermissions(user);
  // }

  load() {
    // Provision a default session up-front so the app can be viewed without a
    // manual sign-in; permissions/roles are then wired from the active user.
    this.authService.ensureSession();
    // Seed the app-wide default AI configuration (Google Gemini) so the
    // settings are already entered for every visitor and preserved across
    // deployments.
    this.aiService.ensureDefaultConfig();
    return this.authService
      .change()
      .pipe(
        tap((user) => {
          return this.setPermissions(user);
        })
      )
      .subscribe();
  }

  private setPermissions(user: User) {
    const role: Record<string, string[]> = {};
    user['roles']?.forEach((e: { name: string }) => {
      this.permissonsService.loadPermissions(user.permissions!);
      this.rolesService.flushRoles();
      const name = e['name'];
      role[name] = user.permissions as string[];
    });
    this.rolesService.addRolesWithPermissions(role);
  }
}
