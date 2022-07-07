import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'module0-cli';

  //TODO: create an array of movies that is initialized with an empty array, of the type Movie
  movies: Movie[];

  //TODO: Create a variable that is called selectedMovie which is type Movie
  selectedMovie: Movie;

  //TODO: Create a variable called displayMovie which is initialized with the value ‘false’
  displayMovie: boolean = false;

  //TODO: Create 2 movies (use imdb.com) and 3 actors (check imdb.com as well)\
  movie1: Movie = {
    id: 1,
    name: 'Movie1',
    director: 'Director1',
    rating: 5,
    duration: 2,
    releasedDate: '17/02/2004',
    actors: [
      {
        id: 1,
        firstName: 'Actor1',
        lastName: 'tor1',
      },
      {
        id: 2,
        firstName: 'Actor2',
        lastName: 'tor2',
      },
    ],
  };

  //TODO: Create a function that has a parameter called movie of type Movie which returns a void and assigns the parameter to the selectedMovie and set displayMovie to value ‘true’
  showMovie = (movie: Movie): void => {
    this.selectedMovie = movie;
    this.displayMovie = true;
  };

  constructor() {
    //TODO: Add the movies into the array in the constructor
    this.movies.push(this.movie1);
  }
}
