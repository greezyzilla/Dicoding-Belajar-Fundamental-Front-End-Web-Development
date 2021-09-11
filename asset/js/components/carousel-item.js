import "./button-toggle-list.js";

class CarouselItem extends HTMLElement {
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
        this.setAttribute("class", `${this._movie.active ? "" : "hidden"}`);
        this.innerHTML = `
            <div class="mb-12 carousel flex flex-col justify-center" style="height:35vw">
                <div id="carousel" style="background-size: cover; background-position: center; background-image: url(https://image.tmdb.org/t/p/original/${this._movie.backdrop_path});height:50vw"></div>
                <div class="carousel-item">
                    <h1 class="w-3/5 md:w-1/2 text-center md:text-left mx-auto md:mx-0 text-3xl md:text-4xl text-white font-semibold mb-4">${this._movie.title}</h1>
                    <p class="w-1/3 text-gray-300 text-sm hidden md:block">${this._movie.overview.length > 300 ? this._movie.overview.split(".").shift() + "." : this._movie.overview}</p>
                    <p class="text-center -mt-2 text-base text-gray-300 md:hidden">${this._movie.tagline || this._movie.title + " The Movie."}</p>
                    <div class="flex justify-center md:justify-start mt-6 gap-4">
                        <button id=${"toggle" + this._movie.id}></button>
                        <a href='./details.html?id=${this._movie.id}' class="py-2 px-4 border border-yellow-600 bg-yellow-600 text-white text-md text-bold rounded-sm transform hover:scale-110 transition ease-in-out">Read More</a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("carousel-item", CarouselItem);
