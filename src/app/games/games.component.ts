import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from '../games-list/games-list.component';
import { FreetogamesService } from '../freetogames.service';
import { Freetogames } from '../freetogames';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    CommonModule,
    GamesListComponent
  ],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  freetogamesList: Freetogames[] = [];
  filteredFreetogamesList: Freetogames[] = [];
  freetogamesService: FreetogamesService = inject(FreetogamesService);
  categories: String[];

  constructor() {
    this.freetogamesService.getAllFreetogames().then((filteredFreetogamesList: Freetogames[]) => {
      this.freetogamesList = filteredFreetogamesList;
      this.filteredFreetogamesList = filteredFreetogamesList;
    });

    this.categories = [
      "mmorpg",
      "shooter",
      "strategy",
      "moba",
      "racing",
      "sports",
      "social",
      "sandbox",
      "open-world",
      "survival",
      "pvp",
      "pve",
      "pixel",
      "voxel",
      "zombie",
      "turn-based",
      "first-person",
      "third-Person",
      "top-down",
      "tank",
      "space",
      "sailing",
      "side-scroller",
      "superhero",
      "permadeath",
      "card",
      "battle-royale",
      "mmo",
      "mmofps",
      "mmotps",
      "3d",
      "2d",
      "anime",
      "fantasy",
      "sci-fi",
      "fighting",
      "action-rpg",
      "action",
      "military",
      "martial-arts",
      "flight",
      "low-spec",
      "tower-defense",
      "horror",
      "mmorts",
    ]
  }

  allResults() {
    this.filteredFreetogamesList = this.freetogamesList;
  }

  filterResults(title: string, category: string, platform: string) {
    this.filteredFreetogamesList = this.freetogamesList;

    if (title) {
      this.filteredFreetogamesList = this.freetogamesList.filter(
        freetogames => freetogames?.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (category) {
      this.filteredFreetogamesList = this.filteredFreetogamesList.filter(
        freetogames => freetogames?.genre.toLowerCase().includes(category.toLowerCase())
      );
    }

    console.log(platform);
    if (platform) {
      this.filteredFreetogamesList = this.filteredFreetogamesList.filter(
        freetogames => freetogames?.platform.toLowerCase().includes(platform.toLowerCase())
      );
    }
  }
}
