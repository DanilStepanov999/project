'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let oneOfFilm = prompt('Один из последних просмотренных фильмов?', ''), 
    check = prompt('На сколько оцените его?', '');

personalMovieDB['movies'] = {oneOfFilm: check};

console.log(personalMovieDB.movies);