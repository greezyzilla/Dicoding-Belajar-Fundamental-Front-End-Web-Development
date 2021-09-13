# Overview

This project is made to fulfill the last submission of **Dicoding’s Front-End Web Development Fundamental course**. Inspired by **MyAnimeList.net**, user can add their watched movies into their own watched list. The watched list is saved in the browser’s local storage. The movies data is taken from **TheMovieDB** public API.

## Usage

The main files stored in the `src` folder, there will be a `css` folder to save the configuration file for Tailwindcss, `template` folder contains a site template on `.html` format, and `js` folder used to store the site pages, components, and data. To compile the files, you can type the command : > npm run start

There will be a `public` folder that contains HTML pages and a `js` folder that contain javascript files for each page. To remove the `public` folder's you can type the command : > npm run clean

## API List

This project uses several endpoints from TheMovieDB API. Here is the endpoint list :
|Description| Items|
|--|--|
| Index Page | [Upcoming Movies](https://developers.themoviedb.org/3/movies/get-upcoming), [Now Playing Movies](https://developers.themoviedb.org/3/movies/get-now-playing), [Top Rated Movies](https://developers.themoviedb.org/3/movies/get-top-rated-movies), [Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)|
|Details Page|[Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details), [Movie Credits](https://developers.themoviedb.org/3/movies/get-movie-credits)|
|Browse Page|[Search Movie](https://developers.themoviedb.org/3/search/search-movies), [Upcoming Movies](https://developers.themoviedb.org/3/movies/get-upcoming), [Now Playing Movies](https://developers.themoviedb.org/3/movies/get-now-playing), [Top Rated Movies](https://developers.themoviedb.org/3/movies/get-top-rated-movies)|
|Movie Image| [TheMovieDB Image](https://developers.themoviedb.org/3/getting-started/images)

## Stack

This project uses some libraries to accelerate the development project. Here is the stack list :

-   HTML
-   Javascript
-   [Axios](https://github.com/axios/axios)
-   [Tailwindcss](https://tailwindcss.com/)
-   [SweetAlert](https://sweetalert.js.org/)
-   [Webpack](https://webpack.js.org/)
