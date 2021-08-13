import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LahmanBatting,
  Maybe,
  PersonByPlayerIdGQL,
  PersonByPlayerIdQuery,
} from '@sq/data-access';
import { PlayerSearchService } from '@sq/util';
import * as dayjs from 'dayjs';
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(LocalizedFormat);

type BattingTableRow =
  | {
      year: Maybe<number> | undefined;
      teamId: Maybe<string> | undefined;
      lgId: Maybe<string> | undefined;
      g: Maybe<number> | undefined;
      pa: Maybe<number> | undefined;
      ab: Maybe<number> | undefined;
      r: Maybe<number> | undefined;
      h: Maybe<number> | undefined;
      double: Maybe<number> | undefined;
      triple: Maybe<number> | undefined;
      hr: Maybe<number> | undefined;
      rbi: Maybe<number> | undefined;
      sb: Maybe<number> | undefined;
      cs: Maybe<number> | undefined;
      bb: Maybe<number> | undefined;
      so: Maybe<number> | undefined;
      ba: Maybe<number> | undefined;
      obp: Maybe<number> | undefined;
      slg: Maybe<number> | undefined;
      ops: Maybe<number> | undefined;
      gidp: Maybe<number> | undefined;
      hbp: Maybe<number> | undefined;
      sh: Maybe<number> | undefined;
      sf: Maybe<number> | undefined;
      ibb: Maybe<number> | undefined;
    }
  | undefined;
@Component({
  selector: 'sq-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  playerId: string | null;
  player: PersonByPlayerIdQuery['lahmanPersonByPlayerId'];

  battingTableData: BattingTableRow[] | undefined = undefined;

  battingAggregate: BattingTableRow = undefined;

  constructor(
    activatedRoute: ActivatedRoute,
    private playerSearchService: PlayerSearchService
  ) {
    this.playerId = activatedRoute.snapshot.paramMap.get('id');
    if (this.playerId) {
      const match = this.playerSearchService.getPlayerById(this.playerId);
      match.subscribe((res) => {
        this.player = res;

        const mapBattingRow = (
          row: Partial<LahmanBatting>
        ): BattingTableRow => ({
          year: row.year,
          teamId: row.teamId,
          lgId: row.lgId,
          g: row.g,
          pa: row.pa,
          ab: row.ab,
          r: row.r,
          h: row.h,
          double: row.double,
          triple: row.triple,
          hr: row.hr,
          rbi: row.rbi,
          sb: row.sb,
          cs: row.cs,
          bb: row.bb,
          so: row.so,
          ba: row.ba,
          obp: row.obp,
          slg: row.slg,
          ops: row.ops,
          gidp: row.gidp,
          hbp: row.hbp,
          sh: row.sh,
          sf: row.sf,
          ibb: row.ibb,
        });

        this.battingTableData = res?.lahmanBattingsByPlayerId.edges
          .map((e) => e.node)
          .map((e: any) => ({
            year: e.year,
            teamId: e.teamId,
            lgId: e.lgId,
            g: e.g,
            pa: e.pa,
            ab: e.ab,
            r: e.r,
            h: e.h,
            double: e.double,
            triple: e.triple,
            hr: e.hr,
            rbi: e.rbi,
            sb: e.sb,
            cs: e.cs,
            bb: e.bb,
            so: e.so,
            ba: e.ba,
            obp: e.obp,
            slg: e.slg,
            ops: e.ops,
            gidp: e.gidp,
            hbp: e.hbp,
            sh: e.sh,
            sf: e.sf,
            ibb: e.ibb,
          }));

        this.aggregateBattingTotals(this.player);
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
          .filter((s: Maybe<string> | undefined) => s && s?.length > 0)
          .join(', ')}`;
      }
    }

    return output;
  }

  // this is an absolute mess. clean it up.
  aggregateBattingTotals(
    player: PersonByPlayerIdQuery['lahmanPersonByPlayerId']
  ) {
    this.battingAggregate = this.battingTableData?.reduce((a, b) => ({
      year:
        a?.year !== undefined &&
        a?.year !== null &&
        b?.year !== undefined &&
        b?.year !== null
          ? a.year + b.year
          : 0,
      teamId:
        a?.teamId !== undefined &&
        a?.teamId !== null &&
        b?.teamId !== undefined &&
        b?.teamId !== null
          ? a.teamId + b.teamId
          : '',
      lgId:
        a?.lgId !== undefined &&
        a?.lgId !== null &&
        b?.lgId !== undefined &&
        b?.lgId !== null
          ? a.lgId + b.lgId
          : '',
      g:
        a?.g !== undefined &&
        a?.g !== null &&
        b?.g !== undefined &&
        b?.g !== null
          ? a.g + b.g
          : 0,
      pa:
        a?.pa !== undefined &&
        a?.pa !== null &&
        b?.pa !== undefined &&
        b?.pa !== null
          ? a.pa + b.pa
          : 0,
      ab:
        a?.ab !== undefined &&
        a?.ab !== null &&
        b?.ab !== undefined &&
        b?.ab !== null
          ? a.ab + b.ab
          : 0,
      r:
        a?.r !== undefined &&
        a?.r !== null &&
        b?.r !== undefined &&
        b?.r !== null
          ? a.r + b.r
          : 0,
      h:
        a?.h !== undefined &&
        a?.h !== null &&
        b?.h !== undefined &&
        b?.h !== null
          ? a.h + b.h
          : 0,
      double:
        a?.double !== undefined &&
        a?.double !== null &&
        b?.double !== undefined &&
        b?.double !== null
          ? a.double + b.double
          : 0,
      triple:
        a?.triple !== undefined &&
        a?.triple !== null &&
        b?.triple !== undefined &&
        b?.triple !== null
          ? a.triple + b.triple
          : 0,
      hr:
        a?.hr !== undefined &&
        a?.hr !== null &&
        b?.hr !== undefined &&
        b?.hr !== null
          ? a.hr + b.hr
          : 0,
      rbi:
        a?.rbi !== undefined &&
        a?.rbi !== null &&
        b?.rbi !== undefined &&
        b?.rbi !== null
          ? a.rbi + b.rbi
          : 0,
      sb:
        a?.sb !== undefined &&
        a?.sb !== null &&
        b?.sb !== undefined &&
        b?.sb !== null
          ? a.sb + b.sb
          : 0,
      cs:
        a?.cs !== undefined &&
        a?.cs !== null &&
        b?.cs !== undefined &&
        b?.cs !== null
          ? a.cs + b.cs
          : 0,
      bb:
        a?.bb !== undefined &&
        a?.bb !== null &&
        b?.bb !== undefined &&
        b?.bb !== null
          ? a.bb + b.bb
          : 0,
      so:
        a?.so !== undefined &&
        a?.so !== null &&
        b?.so !== undefined &&
        b?.so !== null
          ? a.so + b.so
          : 0,
      ba:
        a?.ba !== undefined &&
        a?.ba !== null &&
        b?.ba !== undefined &&
        b?.ba !== null
          ? a.ba + b.ba
          : 0,
      obp:
        a?.obp !== undefined &&
        a?.obp !== null &&
        b?.obp !== undefined &&
        b?.obp !== null
          ? a.obp + b.obp
          : 0,
      slg:
        a?.slg !== undefined &&
        a?.slg !== null &&
        b?.slg !== undefined &&
        b?.slg !== null
          ? a.slg + b.slg
          : 0,
      ops:
        a?.ops !== undefined &&
        a?.ops !== null &&
        b?.ops !== undefined &&
        b?.ops !== null
          ? a.ops + b.ops
          : 0,
      gidp:
        a?.gidp !== undefined &&
        a?.gidp !== null &&
        b?.gidp !== undefined &&
        b?.gidp !== null
          ? a.gidp + b.gidp
          : 0,
      hbp:
        a?.hbp !== undefined &&
        a?.hbp !== null &&
        b?.hbp !== undefined &&
        b?.hbp !== null
          ? a.hbp + b.hbp
          : 0,
      sh:
        a?.sh !== undefined &&
        a?.sh !== null &&
        b?.sh !== undefined &&
        b?.sh !== null
          ? a.sh + b.sh
          : 0,
      sf:
        a?.sf !== undefined &&
        a?.sf !== null &&
        b?.sf !== undefined &&
        b?.sf !== null
          ? a.sf + b.sf
          : 0,
      ibb:
        a?.ibb !== undefined &&
        a?.ibb !== null &&
        b?.ibb !== undefined &&
        b?.ibb !== null
          ? a.ibb + b.ibb
          : 0,
    }));
  }
}
