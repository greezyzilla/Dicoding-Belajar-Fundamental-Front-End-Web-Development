import "./button-toggle-list.js";

class DetailsInformation extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    connectedCallback() {
        const button = document.getElementById("toggle" + this._movie.id);
        const newButton = document.createElement("button-toggle-list");
        newButton.movie = this._movie;
        button.replaceWith(newButton);
    }

    render() {
        const releaseDate = new Date(this._movie.release_date);
        this.innerHTML = `
            <img class="h-full" style="object-fit:cover;width: 100vw; position: absolute;z-index:-1; top: 0; left: 0; mask-image: radial-gradient(51.35% 33.53% at 50.62% 33.53%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%); -webkit-mask-image: radial-gradient(51.35% 33.53% at 50.62% 33.53%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);" src="https://image.tmdb.org/t/p/original${this._movie.backdrop_path}" alt=""/>
            <h1 class="text-4xl shadow-text-orange font-semibold text-white white text-center mt-24 mb-16">${this._movie.tagline.toUpperCase() || this._movie.title.toUpperCase()}</h1>
            <div class="flex flex-col md:flex-row gap-12 items-center mb-8 md:h-96">
                <div style="background-size:cover; background-position:center; box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 0.3); background-image:url(https://image.tmdb.org/t/p/w500${this._movie.poster_path})" class="w-64 h-96 bg-cover rounded-xl"></div>
                <div class="md:w-2/3">
                    <h2 class="text-3xl text-white">${this._movie.title}
                        <span class="inline-flex items-baseline gap-1 text-sm text-yellow-500 py-1 px-3 bg-gray-900 rounded-xl">
                            <span>${this._movie.vote_average}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.6rem" height="0.6rem" viewBox="0 0 24 24" fill="#FF900A" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </span>
                    </h2>
                    <div class="flex gap-4 text-white text-sm mt-4">${this._movie.genres.map((genre) => `<span class="px-1 rounded-xl bg-indigo-500">${genre.name}</span>`).join("")}</div>
                    <p class="text-md text-yellow-500 mt-4">${this._movie.status == "Released" ? "Released" : "Will be released"} on ${releaseDate.toDateString()}</p>
                    <p class="text-md text-gray-300 mt-6">${this._movie.overview}</p>
                    <div class="flex gap-4 mt-6">
                        <button id=${"toggle" + this._movie.id}></button>
                        ${this._movie.homepage.length > 1 ? `<a href=${this._movie.homepage} class="py-2 px-4 border border-yellow-600 bg-yellow-600 text-white text-md text-bold rounded-sm transform hover:scale-110 transition ease-in-out">Open HomePage</a>` : ""}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("details-information", DetailsInformation);
