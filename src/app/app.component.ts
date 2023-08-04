import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zennigames';
  constructor() {}

  get characterIllustration(): string {
    return environment.personal.caricature;
  }

  get characterName(): string {
    return environment.personal.name;
  }
}
