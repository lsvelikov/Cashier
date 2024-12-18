import { Component, input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterLink, FooterComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashier-app';
  isClicked = false;

  onClick() {
    this.isClicked = true;
  }
}
