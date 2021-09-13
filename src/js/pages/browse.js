import "../components/site-header.js";
import "../components/display-card.js";
import "../components/browse-pagination.js";
import "../components/site-footer.js";
import watchedList from "../data/movies.js";
import axios from "axios";
import "../../css/tailwind.css";
import "regenerator-runtime";

const getMoviesNode = async (category, query, page) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US&query=${query}&page=${page}`;
    if (category) {
        if (category === "playing") url = `https://api.themoviedb.org/3/movie/now_playing?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US&page=${page}`;
        else if (category === "upcoming") url = `https://api.themoviedb.org/3/movie/upcoming?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US&page=${page}`;
        else if (category === "top") url = `https://api.themoviedb.org/3/movie/top_rated?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US&page=${page}`;
        else return { moviesNodes: null, result: 0, pages: 1 };
    }

    const moviesNodes = document.createElement("section");
    moviesNodes.setAttribute("class", "flex flex-wrap justify-center gap-x-2 gap-y-6");

    const { data: searchData } = await axios.get(url);
    searchData.results.forEach((movie) => {
        const movieCard = document.createElement("display-card");
        movieCard.movie = { ...movie, onList: watchedList.include(movie) };
        moviesNodes.appendChild(movieCard);
    });
    return { moviesNodes, totalResult: searchData.total_results, totalPages: searchData.total_pages };
};

window.addEventListener("load", async () => {
    const category = new URLSearchParams(location.search).get("category");
    const query = new URLSearchParams(location.search).get("query");
    const page = +new URLSearchParams(location.search).get("page") || 1;

    const headerNode = document.getElementById("header");
    const siteHeaderNode = document.createElement("site-header");
    siteHeaderNode.setting = { active: "search", query: query };
    headerNode.appendChild(siteHeaderNode);

    const mainNode = document.getElementById("main");
    mainNode.setAttribute("class", `${mainNode.classList.toString()} flex flex-col items-center mb-36 md:mb-0`);
    mainNode.innerHTML = `<h1 class="text-2xl text-white">Search Result</h1><p class="text-xs text-gray-300 mt-2 mb-6">Total Result : <span id="search-count">0</span></p>`;

    const { moviesNodes, totalResult, totalPages } = await getMoviesNode(category, query, page);
    document.getElementById("search-count").innerText = totalResult;
    moviesNodes && mainNode.appendChild(moviesNodes);

    const pagination = document.createElement("browse-pagination");
    pagination.setting = { totalPages: totalPages, category: category, page: page, query: query };
    mainNode.appendChild(pagination);

    document.getElementById("footer").appendChild(document.createElement("site-footer"));
});
