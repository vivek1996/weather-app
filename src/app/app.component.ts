import { Component, OnInit, Renderer2 } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData: any;
  darkTheme = false;
  constructor(private _http: WeatherService, private renderer: Renderer2) {}
  ngOnInit() {
    this.findMe();
    if (localStorage.getItem('dark')) {
      this.switchTheme();
    }
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this._http.getByCoord(position).subscribe(
          data => {
            this.weatherData = data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  // Direct access to the DOM
  // switch(e) {
  //   if (localStorage.getItem('funky')) {
  //     document.body.classList.add('funky');
  //     e.innerText = 'Turn theme off';
  //   }
  //   if (document.body.classList.contains('funky')) {
  //     document.body.classList.remove('funky');
  //     e.innerText = 'Turn theme on';
  //     localStorage.removeItem('funky');
  //   } else {
  //     document.body.classList.add('funky');
  //     e.innerText = 'Turn theme off';
  //     localStorage.setItem('funky', 'true');
  //   }
  // }
  // Access via Angular
  switchTheme() {
    this.darkTheme = !this.darkTheme;
    if (document.body.classList.contains('dark')) {
      this.renderer.removeClass(document.body, 'dark');
      localStorage.removeItem('dark');
    } else {
      this.renderer.addClass(document.body, 'dark');
      localStorage.setItem('dark', 'true');
    }
  }
}
