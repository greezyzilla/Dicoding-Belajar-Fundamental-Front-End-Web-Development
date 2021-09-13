class DisplayCard extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.setAttribute("id", "card" + this._movie.id);
        this.innerHTML = `
            <a href='./details.html?id=${this._movie.id}'>
                <figure class="gap-2 text-sm items-center flex flex-col text-gray-400 transform hover:scale-105 hover:text-white transition ease-out">
                    <div class="shadow-image flex justify-between bg-cover w-40 h-60 rounded-lg hover:shadow-lg" style="background-image: url(${this._movie.poster_path ? `https://image.tmdb.org/t/p/w200/${this._movie.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"});" alt=${this._movie.title}>
                        <div class="bg-indigo-700 text-gray-300 h-6 text-center rounded-tl-lg rounded-br-lg text-xs p-1">${this._movie.vote_average}</div>
                        <div class="flex items-end">${this._movie.onList ? `<span class="m-2 px-2 py-1 bg-yellow-600 text-white rounded-sm text-xs">Watched</span>` : ""}</div>
                    </div>
                    <figcaption class="text-sm text-center w-44">${this._movie.title || "No Caption"}</figcaption>
                </figure>
            </a>
        `;
    }
}

customElements.define("display-card", DisplayCard);
