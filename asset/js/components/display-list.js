import "./display-card.js";

class DisplayList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    connectedCallback() {
        this.addEventListener("wheel", (event) => {
            event.preventDefault();
            this.scrollLeft += event.deltaY / 4;
        });
    }

    render() {
        this._movies.map((movie) => {
            const movieCard = document.createElement("display-card");
            movieCard.movie = movie;
            this.setAttribute("class", "flex justify-start gap-6 overflow-x-scroll item-wrapper py-6 px-2");
            this.appendChild(movieCard);
        });
    }
}

customElements.define("display-list", DisplayList);
