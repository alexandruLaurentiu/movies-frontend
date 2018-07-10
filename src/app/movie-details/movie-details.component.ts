import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie$: Object;
  movieId$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe(params => this.movieId$ = params.id);
  }

  ngOnInit() {
    this.movie$ = this.data.getMovie(this.movieId$);
  }

}
