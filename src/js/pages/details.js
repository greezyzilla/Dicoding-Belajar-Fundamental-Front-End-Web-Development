import "../components/site-header.js";
import "../components/details-information.js";
import "../components/details-person-list.js";
import "../components/site-footer.js";
import settings from "../data/settings.js";
import watchedList from "../data/movies.js";
import axios from "axios";
import swal from "sweetalert";
import "../../css/tailwind.css";
import "regenerator-runtime";

const getErrorNode = () => {
    const errorNode = document.createElement("section");
    errorNode.setAttribute("class", "flex flex-col items-center");
    errorNode.setAttribute("id", "error");
    errorNode.innerHTML = `
        <h1 class="text-white text-4xl shadow-text-indigo font-semibold mb-4 mt-40">ERROR 404</h1>
        <p class="text-gray-300 text-base mb-6 text-center">The page you are looking for could not be found!</p>
        <a href="./" class="py-2 px-4 border border-yellow-600 bg-yellow-600 text-md rounded-sm text-white transform hover:scale-110 transition ease-in-out cursor-pointer">Back to Home</a>
    `;
    return errorNode;
};

const getInformationNode = async (id) => {
    const { data: movieDetails } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US`);
    const informationsNode = document.createElement("section");
    informationsNode.setAttribute("id", "informations");

    const detailsElement = document.createElement("details-information");
    detailsElement.movie = { ...movieDetails, onList: watchedList.include(movieDetails) };

    informationsNode.appendChild(detailsElement);
    return informationsNode;
};

const getPersonsNodes = async (id) => {
    const { data: credits } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US`);
    const personsNodes = document.createElement("section");
    personsNodes.setAttribute("id", "persons");
    settings.movie.team.forEach((person) => {
        const personNode = document.createElement("details-person-list");
        personNode.setting = {
            label: person.label,
            persons: credits[person.type].filter(person.filter),
            id: person.id,
        };
        personsNodes.appendChild(personNode);
    });
    return personsNodes;
};

window.addEventListener("load", async () => {
    const id = new URLSearchParams(location.search).get("id");

    const headerNode = document.createElement("site-header");
    headerNode.setting = { active: "details" };
    document.getElementById("header").appendChild(headerNode);

    const mainNode = document.getElementById("main");
    mainNode.setAttribute("class", mainNode.classList.toString() + " md:w-5/6 lg:4/5 2xl:w-3/5 mb-28 md:mb-0");

    try {
        const informationsNode = await getInformationNode(id);
        const personsNode = await getPersonsNodes(id);

        mainNode.innerHTML = `
            <a href='./index.html' class="mt-8 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span href="" class="text-gray-300 text-sm">Back to Home</span>
            </a>
        `;

        mainNode.appendChild(informationsNode);
        mainNode.appendChild(personsNode);
    } catch (error) {
        console.log(error);
        mainNode.style.minHeight = "65vh";
        mainNode.appendChild(getErrorNode());
    }

    document.getElementById("footer").appendChild(document.createElement("site-footer"));
});
