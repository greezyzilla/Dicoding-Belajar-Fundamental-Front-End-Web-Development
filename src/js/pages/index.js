import "../components/site-header.js";
import "../components/carousel-list.js";
import "../components/display-list.js";
import "../components/site-footer.js";
import settings from "../data/settings.js";
import watchedList from "../data/movies.js";
import axios from "axios";
import swal from "sweetalert";
import "../../css/tailwind.css";
import "regenerator-runtime";

const getMoviesSectionsNodes = async (displays) => {
    const moviesSectionsNodes = [];
    for (const display of displays) {
        try {
            const moviesSection = document.createElement("section");
            moviesSection.setAttribute("class", "mb-4");
            moviesSection.innerHTML = `
                <div class="flex gap-4 items-end">
                    <h1 class="text-white text-xl font-semibold">${display.title}</h1>
                    <a href='./browse.html?category=${display.label}' class="text-yellow-600">show more</a>
                </div>`;
            const moviesDisplay = document.createElement("display-list");
            const {
                data: { results: movies },
            } = await axios.get(display.url);
            moviesDisplay.movies = movies.splice(0, 10).map((movie) => ({ ...movie, onList: watchedList.include(movie) }));
            moviesSection.appendChild(moviesDisplay);
            moviesSectionsNodes.push(moviesSection);
        } catch (error) {
            swal("Oops", "Something went wrong!", "error");
        }
    }
    return moviesSectionsNodes;
};

const getMoviesCarouselNode = async () => {
    const moviesCarousel = document.createElement("carousel-list");
    const {
        data: { results: nowPlayingMovies },
    } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US");
    const carouselMovies = [];
    for (const movie of nowPlayingMovies.slice(0, 4)) {
        const { data: movieDetail } = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US`);
        carouselMovies.push({ ...movieDetail, onList: watchedList.include(movieDetail) });
    }
    moviesCarousel.movies = carouselMovies;
    return moviesCarousel;
};

window.addEventListener("load", async () => {
    const headerNode = document.createElement("site-header");
    headerNode.setting = { active: "home" };
    document.getElementById("header").appendChild(headerNode);

    const mainNode = document.getElementById("main");
    mainNode.setAttribute("class", `${mainNode.classList.toString()} mb-28 md:mb-0`);
    mainNode.appendChild(await getMoviesCarouselNode());
    const moviesNode = await getMoviesSectionsNodes(settings.movie.display);
    moviesNode.forEach((movieNode) => mainNode.appendChild(movieNode));

    document.getElementById("footer").appendChild(document.createElement("site-footer"));
});
