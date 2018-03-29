import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMainModule } from './app-main/app-main.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TickerModule } from './ticker/ticker.module';
import { CoinOneApiService } from './share/coin-one-api.service';
import { ChartModule } from './chart/chart.module';
import { APP_CONFIG } from './app.config';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppMainModule,
    AppRoutingModule,
    TickerModule,
    ChartModule,
    BrowserAnimationsModule
  ],
  providers: [
    CoinOneApiService,
    {
      provide: 'APP_CONFIG',
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
