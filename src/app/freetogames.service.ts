import { Injectable } from '@angular/core';
import { Freetogames } from './freetogames';

@Injectable({
  providedIn: 'root'
})
export class FreetogamesService {
  urlCors = 'https://cors-anywhere.herokuapp.com'
  url = 'https://www.freetogame.com/api';

  // https://www.freetogame.com/api/games?platform=pc
  // https://www.freetogame.com/api/games?category=shooter

  async getFreetogamesById(id: number): Promise<Freetogames | undefined> {
    const data = await fetch(`${this.urlCors}/${this.url}/game?id=${id}`);
    return await data.json() ?? {};
  }

  async getAllFreetogames(): Promise<Freetogames[]> {
    const data = await fetch(`${this.urlCors}/${this.url}/games`)

    if (data?.status > 400) {
      return []
    }

    return await data.json() ?? [];
  }
}
