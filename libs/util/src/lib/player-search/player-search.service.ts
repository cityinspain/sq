import { Injectable } from '@angular/core';
import { PLAYERS } from './test-players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlayerSearchService {
  constructor(private http: HttpClient) {}

  getSuggestions(
    prefix: string
  ): Observable<{ playerID: string; nameFirst: string; nameLast: string }[]> {
    // const mapped = PLAYERS.map((p) => ({
    //   name: `${p.nameFirst} ${p.nameLast}`,
    //   id: p.id,
    // }));
    // console.log(mapped);
    // console.log(prefix);
    // return mapped
    //   .filter((m) => m.name.toLowerCase().startsWith(prefix.toLowerCase()))
    //   .slice(0, 4);
    return this.http.get(
      'http://localhost:3000/player/search/' + prefix
    ) as Observable<
      { playerID: string; nameFirst: string; nameLast: string }[]
    >;
  }

  getPlayerById(id: string) {
    return this.http.get('http://localhost:3000/player/' + id);
  }
}
