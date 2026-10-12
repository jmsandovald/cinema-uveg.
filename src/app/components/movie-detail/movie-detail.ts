import { Component, Input, OnChanges, SimpleChanges, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetailComponent implements OnChanges {
  @Input() movieId: number = 0;
  
  private movieService = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);
  
  movie: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movieId'] && this.movieId) {
      this.loadMovieDetails();
    }
  }

  loadMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe({
      next: (data: any) => {
        this.movie = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar los detalles de la película:', err);
      }
    });
  }
}