import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GamesData } from '../models/gamesData.model';

@Injectable({
  providedIn: 'root',
})
export class FreeEpicGamesService {
  constructor(private http: HttpClient) {}

  public getGamesData(): Observable<GamesData> {
    return this.http.get<GamesData>(environment.freeEpicGamesApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHeaderName, environment.XRapidAPIHeaderValue)
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
    });
  }
}
