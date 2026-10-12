import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie';
import { MovieDetailComponent } from '../movie-detail/movie-detail';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieDetailComponent],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieListComponent implements OnInit {
  private movieService = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);

  movies: any[] = [];
  selectedMovieId: number = 0;

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe({
      next: (data: any) => {
        this.movies = data.results;
        // Forzamos a la interfaz a redibujar los datos inmediatamente
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error al conectar con la API:", err);
      }
    });
  }

  onSelectMovie(id: number) {
    this.selectedMovieId = id;
  }
}