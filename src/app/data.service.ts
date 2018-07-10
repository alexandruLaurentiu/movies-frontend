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
        name: 'Gigel',
        lastName: 'Popescu',
        age: 19,
        preferredMovies: [
          {
            name: 'Batman'
          },
          {
            name: 'Superman'
          },
          {
            name: 'Spiderman'
          }
        ]
      },
      {
        id: 2,
        name: 'Costel',
        lastName: 'Stanescu',
        age: 30,
        preferredMovies: [
          {
            name: 'Johnny English'
          },
          {
            name: 'Thor Ragnarok'
          },
          {
            name: 'Wonder Woman'
          }
        ]
      },
      {
        id: 3,
        name: 'Stan',
        lastName: 'Trifan',
        age: 25,
        preferredMovies: [
          {
            name: ' Pirates of the Caribbean: Dead Men Tell No Tales'
          },
          {
            name: 'Justice League'
          },
          {
            name: 'Transformers: The Last Knight'
          }
        ]
      }
    ];
    return clients;
  }

  getMovies() {
    const movies = [
      {
        id: 1,
        name: 'Batman',
        apparitionYear: 2002,
        gen: 'Action',
        note: 3,
        principals: [
          {
            name: 'Christian Bale',
            role: 'Batman'
          },
          {
            name: 'Heath Ledger',
            role: 'Joker'
          },
          {
            name: 'Gary Oldman',
            role: 'James Gordon'
          },
          {
            name: 'Michael Caine',
            role: 'Alfred Pennyworth'
          },
          {
            name: 'Morgan Freeman',
            role: 'Lucius Fox'
          }
        ],
        secondars: [
          {
            name: 'Aaron Eckhart',
            role: 'Two-face'
          },
          {
            name: 'Cillian Murphy',
            role: 'Scarecorw'
          },
          {
            name: 'Maggie Gyllenhaal',
            role: 'Rachel Dawes'
          },
          {
            name: 'Nestor Carbonell',
            role: 'Mayor Anthony Garcia'
          },
          {
            name: 'Eric Roberts',
            role: 'Salvatore Maroni'
          }
        ],
      },
      {
        id: 2,
        name: 'Avengers',
        apparitionYear: 2012,
        gen: 'Action',
        note: 4,
        principals: [
          {
            name: 'Robert Downey Jr.',
            role: 'Iron-man'
          },
          {
            name: 'Chris Hemsworth',
            role: 'Thor'
          },
          {
            name: 'Mark Ruffalo',
            role: 'Hulk'
          },
          {
            name: 'Chris Evans',
            role: 'Captain America'
          },
          {
            name: 'Samuel L. Jackson',
            role: 'Nick Fury'
          }
        ],
        secondars: [
          {
            name: 'Tom Hiddleston',
            role: 'Loki'
          },
          {
            name: 'Scarlett Johansson',
            role: 'Natasha Romanov'
          },
          {
            name: 'Jeremy Renner',
            role: 'Clint Barton'
          },
          {
            name: 'Paul Bettany',
            role: 'J.A.R.V.I.S.'
          },
          {
            name: 'Gwyneth Paltrow',
            role: 'Pepper Potts'
          }
        ],
      },
      {
        id: 3,
        name: 'Spiderman',
        apparitionYear: 2001,
        gen: 'Action',
        note: 5,
        principals: [
          {
            name: 'Toby Maguire',
            role: 'Spiderman'
          },
          {
            name: 'Kirsten Dunst',
            role: 'Mary Jane'
          },
          {
            name: 'Willem Dafoe',
            role: 'Green Goblin'
          },
          {
            name: 'James Franco',
            role: 'Harry Osborn'
          },
          {
            name: 'Rosemary Harris',
            role: 'May Parker'
          }
        ],
        secondars: [
          {
            name: 'J. K. Simmons',
            role: 'J. Jonah Jameson'
          },
          {
            name: 'Cliff Robertson',
            role: 'Ben Parker'
          },
          {
            name: 'Bill Nunn',
            role: 'Robbie Robertson'
          },
          {
            name: 'Joe Manganiello',
            role: 'Flash Thompson'
          },
          {
            name: 'Ted Raimi',
            role: 'Hoffman'
          }
        ],
      }
    ];
    return movies;
  }

  getMovie(movieId) {
    return this.getMovies().find(movie => movie.id == movieId);
  }

  getClient(clientId) {
    return this.getClients().find(client => client.id == clientId);
  }
}
