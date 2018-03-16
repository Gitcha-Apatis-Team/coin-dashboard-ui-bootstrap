import { Injectable } from '@angular/core';

@Injectable()
export class SearchFilterService {
  private searchKeyword: string;

  constructor() {}

  public setSearchWord(searchKeyword: string) {
    this.searchKeyword = searchKeyword;
  }

  public getSearchWord() {
    return this.searchKeyword;
  }
}
