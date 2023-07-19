import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Freetogames } from '../freetogames';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" width="100%" height="225" [src]="freetogames.thumbnail" alt="Exterior photo of {{freetogames.title}}">
      <div class="card-body">
        <h5 class="card-title">{{ freetogames.title }}</h5>
        <p class="card-text text-truncate">
          {{ freetogames.short_description }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a type="button" class="btn btn-sm btn-outline-secondary" [routerLink]="['/details', freetogames.id]">Ver</a>
          </div>
          <small class="text-body-secondary">
            {{ freetogames.genre}}, {{freetogames.platform }}
          </small>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  @Input() freetogames!: Freetogames;
}
