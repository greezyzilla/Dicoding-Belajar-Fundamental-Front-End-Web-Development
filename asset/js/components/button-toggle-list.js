import watchedList from "../data/movies.js";

class ButtonToggleList extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "py-2 px-4 border border-indigo-300 text-md rounded-sm text-indigo-200 transform hover:scale-110 transition ease-in-out cursor-pointer");
        this.addEventListener("click", () => {
            if (this._movie.onList) {
                watchedList.remove(this._movie);
                this._movie.onList = false;
                swal("Removed", "Removed movie from watched list", "success");
            } else {
                watchedList.add(this._movie);
                this._movie.onList = true;
                swal("Added", "Added movie to watched list", "success");
            }
            const moviesCard = document.querySelectorAll("#card" + this._movie.id);
            if (moviesCard.length) moviesCard.forEach((item) => (item.movie = this._movie));
            this.render();
        });
    }

    render() {
        this.innerHTML = this._movie.onList ? "on Watched List" : "Add to List";
    }
}

customElements.define("button-toggle-list", ButtonToggleList);
