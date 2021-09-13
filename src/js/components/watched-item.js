import watchedList from "../data/movies.js";

class WatchedItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "grid grid-cols-9 md:grid-cols-12 justify-items-center bg-gray-900 py-4 rounded-md pl-2");
        const deleteButton = document.getElementById(`delete${this._movie.id}`);
        deleteButton.addEventListener("click", () => {
            watchedList.remove(this._movie);
            swal("Removed", "Successfully removed the movie from watched list", "success");
            this.parentNode.movies = watchedList.list;
        });
    }

    render() {
        const date = new Date(this._movie.release_date);
        this.innerHTML = `
            <div class="w-16 h-24 bg-gray-300 rounded-md bg-cover" style="background-image: url(${this._movie.poster_path ? `https://image.tmdb.org/t/p/w200/${this._movie.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"});"></div>
            <div class="col-span-6 place-self-start flex flex-col ml-4">
                <div>
                    <h3 class="font-semibold text-base mb-1">${this._movie.title}</h3>
                    <p class="text-sm">${this._movie.tagline || "No tagline."}</p>
                </div>
                <div class="flex gap-2 mt-6">
                    ${this._movie.genres.map((genre) => `<p class="text-xs px-1 bg-indigo-500 rounded-xl">${genre.name}</p>`).join("")}
                </div>
            </div>
            <p class="hidden md:block col-span-2">${date.toDateString()}</p>
            <p class="hidden md:block text-center ${this._movie.status === "Released" ? "text-green-500" : "text-yellow-200"}">${this._movie.status}</p>
            <div class="col-span-2 flex flex-col gap-2">
                <a href="./details.html?id=${this._movie.id}" class="text-xs py-1 w-28 border rounded-md border-yellow-300 text-yellow-300 text-center">Details</a>
                <button id=delete${this._movie.id} class="text-xs py-1 w-28 border rounded-md border-red-500 text-red-500">Delete</button>
            </div>
        `;
    }
}

customElements.define("watched-item", WatchedItem);
