import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserTablesComponent } from "../user-tables/user-tables.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordId = signal('7070');
  enteredPassword = signal('');
  private router = inject(Router);

  onSubmit() {
    if (this.enteredPassword() === this.passwordId()) {
      console.log(this.enteredPassword());
      this.enteredPassword.set('');
      this.router.navigate(['/tables'])
    } else {
      this.enteredPassword.set('Please enter valid password!');
      setTimeout(() => {
        this.enteredPassword.set('');
      }, 2000);
    }
  }
}
