import { Injectable } from '@angular/core';
import { PLAYERS } from './test-players';

@Injectable({
  providedIn: 'root',
})
export class PlayerSearchService {
  constructor() {}

  getSuggestions(prefix: string) {
    const mapped = PLAYERS.map((p) => ({
      name: `${p.nameFirst} ${p.nameLast}`,
      id: p.id,
    }));
    console.log(mapped);
    console.log(prefix);
    return mapped
      .filter((m) => m.name.toLowerCase().startsWith(prefix.toLowerCase()))
      .slice(0, 4);
  }

  getPlayerById(id: string) {
    const player = PLAYERS.find((p) => p.id === id);
    if (!player) throw new Error('foo');
    return player;
  }
}
