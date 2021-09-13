import "../components/site-header.js";
import "../components/about-card-list.js";
import "../components/site-footer.js";
import settings from "../data/settings.js";
import "../../css/tailwind.css";

const getStackNode = (stack) => {
    const stackNode = document.createElement("section");
    stackNode.setAttribute("id", "stack");
    stackNode.innerHTML = `<h2 class="text-xl mb-2 font-semibold text-center">Stack</h2>`;

    const stackList = document.createElement("about-card-list");
    stackList.items = stack;
    stackNode.appendChild(stackList);
    return stackNode;
};

const getOverviewNode = () => {
    const overviewNode = document.createElement("section");
    overviewNode.setAttribute("id", "overview");
    overviewNode.setAttribute("class", "text-center mb-8");
    overviewNode.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">Overview</h2>
        <p class="text-base text-gray-300">This project is made to fulfill the last submission of Dicoding’s Front-End Web Development Fundamental course. Inspired by MyAnimeList.net, user can add their watched movies into their own watched list. The watched list is saved in the browser’s local storage. The movies data is taken from TheMovieDB public API.</p>
    `;
    return overviewNode;
};

const getDisplayNode = (colors) => {
    const displayNode = document.createElement("section");
    displayNode.setAttribute("id", "display");
    displayNode.style.height = "40vw";
    displayNode.style.backgroundImage = "url(https://i.ibb.co/kcn1Vyk/about-banner.png)";
    displayNode.setAttribute("class", "mb-8 w-full bg-cover flex justify-end items-end bg-center");

    const styleNode = document.createElement("div");
    styleNode.setAttribute("class", "flex flex-col items-end p-2 md:p-8");
    styleNode.innerHTML = `<p class="p-2 text-xl font-semibold">Poppins</p>`;

    const paletteList = document.createElement("about-card-list");
    paletteList.items = colors;
    styleNode.appendChild(paletteList);
    displayNode.appendChild(styleNode);
    return displayNode;
};

window.addEventListener("load", () => {
    const headerNode = document.createElement("site-header");
    headerNode.setting = { active: "about" };
    document.getElementById("header").appendChild(headerNode);

    const mainNode = document.getElementById("main");
    mainNode.innerHTML = `<h1 class="text-center text-3xl shadow-text-orange my-8 font-semibold">ABOUT THIS PROJECT</h1>`;
    mainNode.appendChild(getDisplayNode(settings.about.colors));
    mainNode.appendChild(getOverviewNode());
    mainNode.appendChild(getStackNode(settings.about.stack));

    document.getElementById("footer").appendChild(document.createElement("site-footer"));
});
