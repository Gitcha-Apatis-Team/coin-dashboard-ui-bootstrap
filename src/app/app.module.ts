import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMainModule } from './app-main/app-main.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TickerModule } from './ticker/ticker.module';
import { CoinOneApiService } from './share/coin-one-api.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppMainModule,
    AppRoutingModule,
    TickerModule
  ],
  providers: [CoinOneApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
