import "./button-toggle-list.js";

class CarouselItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    connectedCallback() {
        const button = document.getElementById(`toggle${this._movie.id}`);
        const newButton = document.createElement("button-toggle-list");
        newButton.movie = this._movie;
        button.replaceWith(newButton);
    }

    render() {
        this.setAttribute("class", this._movie.active ? "" : "hidden");
        this.innerHTML = `
            <div class="mb-12 flex flex-col justify-center" style="height:35vw">
                <div class="absolute top-0 left-0" style="z-index:-1;background-size: cover; background-position: center; background-image: url(https://image.tmdb.org/t/p/original/${this._movie.backdrop_path});height:50vw; width:100vw; mask-image: radial-gradient(70.57% 268.74% at 78.04% 52.21%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%); -webkit-mask-image: radial-gradient(70.69% 50.88% at 70.04% 50.21%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);"></div>
                <div>
                    <h1 class="w-3/5 md:w-1/2 text-center md:text-left mx-auto md:mx-0 text-3xl md:text-4xl text-white font-semibold mb-4">${this._movie.title}</h1>
                    <p class="w-1/3 text-gray-300 text-sm hidden md:block">${this._movie.overview.length > 300 ? this._movie.overview.split(".").shift() + "." : this._movie.overview}</p>
                    <p class="text-center -mt-2 text-base text-gray-300 md:hidden">${this._movie.tagline || this._movie.title + " The Movie."}</p>
                    <div class="flex justify-center md:justify-start mt-6 gap-4">
                        <button id=toggle${this._movie.id}></button>
                        <a href='./details.html?id=${this._movie.id}' class="py-2 px-4 border border-yellow-600 bg-yellow-600 text-white text-md text-bold rounded-sm transform hover:scale-110 transition ease-in-out">Read More</a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("carousel-item", CarouselItem);
