import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerSearchService } from '@sq/util';
import * as dayjs from 'dayjs';
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(LocalizedFormat);

@Component({
  selector: 'sq-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  playerId: string | null;
  player: any;

  constructor(
    activatedRoute: ActivatedRoute,
    private playerSearchService: PlayerSearchService
  ) {
    this.playerId = activatedRoute.snapshot.paramMap.get('id');
    if (this.playerId) {
      const match = this.playerSearchService.getPlayerById(this.playerId);
      match.subscribe((res) => {
        this.player = res;
      });
    }
  }

  ngOnInit(): void {}

  formatBirthInfo() {
    let output = 'Born: ';
    if (this.player) {
      if (this.player.birthDate)
        output += dayjs(this.player.birthDate).format('LL');
      if (
        this.player?.birthCountry ||
        this.player?.birthCity ||
        this.player?.birthState
      ) {
        output += ` in ${[
          this.player.birthCity,
          this.player.birthState,
          this.player.birthCountry,
        ]
          .filter((s: string | undefined) => s && s?.length > 0)
          .join(', ')}`;
      }
    }

    return output;
  }
}
