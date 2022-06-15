import { Component, Input } from '@angular/core';
import { Current, Upcoming } from '../models/gamesData.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() game: Current | Upcoming | undefined;
}
