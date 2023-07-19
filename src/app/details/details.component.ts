import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FreetogamesService } from '../freetogames.service';
import { Freetogames } from '../freetogames';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <img [src]="freetogames?.thumbnail" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {{ freetogames?.title }}
              </h5>
              <p class="card-text">
                {{ freetogames?.short_description }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ freetogames?.genre }} </li>
              <li class="list-group-item">{{ freetogames?.platform }} </li>
              <li class="list-group-item">{{ freetogames?.publisher }} </li>
              <li class="list-group-item">{{ freetogames?.developer }} </li>
              <li class="list-group-item">{{ freetogames?.release_date }} </li>
            </ul>
            <div class="card-body">
              <a [href]="freetogames?.freetogame_profile_url" class="card-link" target="_blank">Profile</a>
              <a [href]="freetogames?.game_url" class="card-link" target="_blank">Game URL</a>
            </div>
            <div class="card-footer text-body-secondary text-end">
              <a class="btn btn-secondary" [routerLink]="['/']">volver</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  freetogamesService = inject(FreetogamesService);
  freetogames: Freetogames | undefined;

  freetogamesId = -1;
  constructor() {
    const freetogamesId = parseInt(this.route.snapshot.params['id'], 10);
    this.freetogamesService.getFreetogamesById(freetogamesId).then(freetogames => {
      this.freetogames = freetogames;
    });
  }
}
