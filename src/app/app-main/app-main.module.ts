import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainComponent } from './app-main.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppContentComponent } from './app-content/app-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppMainComponent, AppHeaderComponent, AppFooterComponent, AppContentComponent],
  exports: [AppMainComponent, AppHeaderComponent, AppFooterComponent]
})
export class AppMainModule {}
