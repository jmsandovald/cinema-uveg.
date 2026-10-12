import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }