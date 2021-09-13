import watchedList from "../data/movies.js";

class ButtonToggleList extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "py-2 px-4 border border-indigo-300 text-indigo-200  text-md rounded-sm transform hover:scale-110 transition ease-in-out cursor-pointer");
        this.addEventListener("click", () => {
            if (this._movie.onList) {
                watchedList.remove(this._movie);
                swal("Removed", "Removed movie from watched list", "success");
                this.movie = { ...this._movie, onList: false };
            } else {
                watchedList.add(this._movie);
                swal("Added", "Added movie to watched list", "success");
                this.movie = { ...this._movie, onList: true };
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
