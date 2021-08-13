import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PlayerSearchService } from '@sq/util';
import { Router } from '@angular/router';

@Component({
  selector: 'sq-auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.scss'],
})
export class AutoSearchComponent implements OnInit {
  searchControl = new FormControl();
  suggestions: { id: string; name: string }[] = [];

  focused: boolean = false;

  value: string = '';

  constructor(
    private searchService: PlayerSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe((res) => {
      this.searchService
        .getSuggestions(res)
        .subscribe(
          (
            res: { playerID: string; nameFirst: string; nameLast: string }[]
          ) => {
            console.log(res);
            this.suggestions = res.map((e) => ({
              id: e.playerID,
              name: [e.nameFirst, e.nameLast].join(' '),
            }));
          }
        );
    });
  }

  onValueChange(e: any) {
    console.log('change: e');
  }

  onClickSuggestion(e: Event, s: any) {
    e.preventDefault();
    // alert(s)
    // this.router.navigate();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/profile/player', s.id]));
  }
}
