import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getClients() {
    const clients = [
      {
        id: 1,
        name: 'Gigel'
      },
      {
        id: 2,
        name: 'Costel'
      },
      {
        id: 3,
        name: 'Stan'
      }
    ];
    return clients;
  }

  getMovies() {
    const movies = [
      {
        id: 1,
        name: 'Batman'
      },
      {
        id: 2,
        name: 'Avengers'
      },
      {
        id: 3,
        name: 'Spiderman'
      }
    ];
    return movies;
  }

  getMovie(movieId) {
    let movie;
    return movie;
  }
}
