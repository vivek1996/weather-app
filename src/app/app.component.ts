import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userPosition: any;
  darkTheme = false;
  constructor(private _http: WeatherService) {}
  ngOnInit() {
    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this._http.getByCoord(position).subscribe(
          data => {
            this.userPosition = data;
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
  switch(e) {
    if (localStorage.getItem('funky')) {
      document.body.classList.add('funky');
      e.innerText = 'Turn theme off';
    }
    if (document.body.classList.contains('funky')) {
      document.body.classList.remove('funky');
      e.innerText = 'Turn theme on';
      localStorage.removeItem('funky');
    } else {
      document.body.classList.add('funky');
      e.innerText = 'Turn theme off';
      localStorage.setItem('funky', true);
    }
  }
}
