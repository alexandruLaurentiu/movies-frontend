import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.movie$ = this.data.getMovie(this.movie$);
  }

}
