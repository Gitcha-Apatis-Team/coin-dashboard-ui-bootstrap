import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { debounce, filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { SearchFilterService } from '../search-filter.service';

@Component({
  selector: 'app-ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.scss']
})
export class TickerSearchComponent implements OnInit, OnDestroy {
  public searchKeyword$: Observable<string> = new Subject<string>();
  public curentSearchKeyword: string;

  public searchSub: Subscription;

  constructor(private searchFilterService: SearchFilterService) {}

  ngOnInit() {
    this.searchSub = this.onSearch();
  }

  private onSearch(): Subscription {
    return this.searchKeyword$
      // .pipe(
      //   // map((val) => val.trim()),
      //   // filter(val => val.length > 2)
      // )
      .subscribe((searchKeyword: string) => {
        // console.log(searchKeyword);
        // console.log('구독시작');
        this.searchFilterService.setSearchWord(searchKeyword);
        this.curentSearchKeyword = searchKeyword;
      });
  }

  ngOnDestroy(): void {
    console.log('구독해지');
    this.searchSub.unsubscribe();
  }
}
