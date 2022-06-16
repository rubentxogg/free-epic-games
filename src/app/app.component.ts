import { Component, OnInit } from '@angular/core';
import { GamesData } from './models/gamesData.model';
import { FreeEpicGamesService } from './services/free-epic-games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private readonly freeEpicGamesService: FreeEpicGamesService) {}

  public games: GamesData | undefined;

  ngOnInit(): void {
    this.freeEpicGamesService.getGamesData().subscribe({
      next: (response) => {
        this.games = response;
      }
    })
  }
}
