import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
