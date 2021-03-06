import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { HeightPipe, StatPipe } from '@sq/util';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'player/:id', component: PlayerComponent }]),
  ],
  declarations: [PlayerComponent, HeightPipe, StatPipe],
})
export class ProfileModule {}
