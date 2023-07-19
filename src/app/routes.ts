import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: GamesComponent,
    title: 'Juegos'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Detalle del Juego'
  }
];

export default routeConfig;
