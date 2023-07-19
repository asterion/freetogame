import { Component } from '@angular/core';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    GamesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
  <main>
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend | Marcos Matamala';
}
