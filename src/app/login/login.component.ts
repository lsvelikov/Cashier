import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordId = signal('7070');
  enteredPassword = signal('');

  onSubmit() {
    if (this.enteredPassword() === this.passwordId()) {
      console.log(this.enteredPassword());
      this.enteredPassword.set('');
    } else {
      this.enteredPassword.set('Please enter valid password!');
      setTimeout(() => {
        this.enteredPassword.set('');
      }, 2000);
    }
  }
}
