import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMainModule } from './app-main/app-main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule.forRoot(), AppMainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
