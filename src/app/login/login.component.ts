import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  passwordId = signal('7070');
  enteredPassword = signal('');
  login = false;
  private router = inject(Router);

  onSubmit() {
    if (this.enteredPassword() === this.passwordId()) {
      console.log(this.enteredPassword());
      this.enteredPassword.set('');
      this.login = true;
      this.router.navigate(['/tables'], {
        replaceUrl: true,
      })
    } else {
      this.enteredPassword.set('Please enter valid password!');
      setTimeout(() => {
        this.enteredPassword.set('');
      }, 1500);
    }
  }
}
