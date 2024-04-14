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





for (let i = 0; i < 3; i++) {
    console.log('Ok!')
};



(number === 50) ? console.log('ok!') : console.log('Error');

const number = 50;

switch(number) {
    case 49:
        return 'неверно';
    case 100:
        return 'неверно';
    case 50:
        return 'В точку';
    default:
        return 'не в этот раз';
}