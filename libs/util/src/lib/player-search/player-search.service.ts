import { Injectable } from '@angular/core';
import { PLAYERS } from './test-players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  LahmanPerson,
  PersonByPlayerIdGQL,
  PersonByPlayerIdQuery,
} from '@sq/data-access';
@Injectable({
  providedIn: 'root',
})
export class PlayerSearchService {
  constructor(
    private http: HttpClient,
    private playerGQL: PersonByPlayerIdGQL
  ) {}

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

  getPlayerById(
    id: string
  ): Observable<PersonByPlayerIdQuery['lahmanPersonByPlayerId']> {
    return this.playerGQL
      .fetch({ playerId: id })
      .pipe(map((res) => res.data.lahmanPersonByPlayerId));
  }
}
