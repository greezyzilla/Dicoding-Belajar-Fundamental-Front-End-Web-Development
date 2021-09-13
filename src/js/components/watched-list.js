import "./watched-item.js";

class WatchedList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "flex flex-col gap-4 scrollbar");
        this.style.maxHeight = "70vh";
        this.style.minHeight = "50vh";
    }

    render() {
        if (this._movies.length) {
            this.innerHTML = "";
            this.style.overflowY = "scroll";
            this._movies.forEach((item) => {
                const movieNode = document.createElement("watched-item");
                movieNode.movie = item;
                this.appendChild(movieNode);
            });
        } else {
            this.innerHTML = `<p class="text-center text-base ">No Movies Found</p>`;
        }
    }
}

customElements.define("watched-list", WatchedList);
