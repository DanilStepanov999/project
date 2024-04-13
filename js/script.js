'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let oneOfFilm = prompt('Один из последних просмотренных фильмов?', ''), 
        check = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[oneOfFilm] = check
};

const checkFilms = personalMovieDB.movies;

for (let i in checkFilms) {
    alert(i, ': ', checkFilms[i]);
};