import "./components/site-header.js";
import "./components/watched-list.js";
import "./components/site-footer.js";
import watchedList from "./data/movies.js";

const getFilterNode = () => {
    const filterNode = document.createElement("div");
    filterNode.setAttribute("class", "flex justify-end mb-4");
    filterNode.innerHTML = `
    <div class="flex gap-2 text-xs px-4 py-2 rounded-md bg-gray-900 text-gray-300 items-center">
        <input type="text" placeholder="Filter movie title" style="background: none" class="focus:outline-none" id="filter" />
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
    </div>`;

    filterNode.getElementsByTagName("input")[0].addEventListener("input", ({ target: { value: filter } }) => {
        document.getElementsByTagName("watched-list")[0].movies = watchedList.list.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));
    });

    return filterNode;
};

const getMoviesNode = () => {
    const moviesNode = document.createElement("section");
    moviesNode.setAttribute("id", "movies");

    const moviesLabelNode = document.createElement("div");
    moviesLabelNode.setAttribute("class", "grid grid-cols-9 md:grid-cols-12 justify-items-center text-base mb-4 text-gray-100 pl-2 pr-4");
    moviesLabelNode.innerHTML = `
        <h3>Poster</h3>
        <h3 class="col-span-6">Information</h3>
        <h3 class="hidden md:block col-span-2">Release Date</h3>
        <h3 class="hidden md:block">Status</h3>
        <h3 class="col-span-2">Action</h3>`;
    moviesNode.appendChild(moviesLabelNode);

    const filter = document.getElementById("filter").value || " ";
    const watchedListNode = document.createElement("watched-list");
    watchedListNode.movies = watchedList.list.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));
    moviesNode.appendChild(watchedListNode);

    return moviesNode;
};

window.addEventListener("load", async () => {
    const headerNode = document.createElement("site-header");
    headerNode.setting = { active: "list" };
    document.getElementById("header").appendChild(headerNode);

    const mainNode = document.getElementById("main");
    mainNode.innerHTML = `<h1 class="text-3xl text-center my-8">MY WATCHED LIST</h1>`;
    mainNode.appendChild(getFilterNode());
    mainNode.appendChild(getMoviesNode());

    document.getElementById("footer").appendChild(document.createElement("site-footer"));
});
