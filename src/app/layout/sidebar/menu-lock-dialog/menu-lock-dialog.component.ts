import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

export interface MenuLockDialogData {
  /** Title of the locked menu, shown in the dialog. */
  title: string;
  /** Password required to unlock the menu. */
  password: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-menu-lock-dialog',
  templateUrl: './menu-lock-dialog.component.html',
  styleUrls: ['./menu-lock-dialog.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class MenuLockDialogComponent {
  private dialogRef =
    inject<MatDialogRef<MenuLockDialogComponent, boolean>>(MatDialogRef);
  private formBuilder = inject(FormBuilder);
  data = inject<MenuLockDialogData>(MAT_DIALOG_DATA);

  hide = true;
  error = false;
  lockForm: FormGroup = this.formBuilder.group({
    password: ['', Validators.required],
  });

  get f() {
    return this.lockForm.controls;
  }

  onSubmit(): void {
    if (this.lockForm.invalid) {
      this.error = true;
      return;
    }
    if (this.f['password'].value === this.data.password) {
      this.dialogRef.close(true);
    } else {
      this.error = true;
      this.f['password'].reset();
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
