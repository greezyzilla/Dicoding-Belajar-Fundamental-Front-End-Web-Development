import "./carousel-item.js";

class CarouselList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.active = 0;
        this.render();
    }

    connectedCallback() {
        this.ticker = () => {
            if (this.active == this._movies.length - 1) {
                this.active = 0;
                this.changeActive();
            } else {
                this.active++;
                this.changeActive();
            }
        };
        this.timer = window.setInterval(this.ticker, 5000);
    }

    render() {
        this._movies.map((movie, index) => {
            const carouselItem = document.createElement("carousel-item");
            if (index == this.active) movie.active = true;
            carouselItem.movie = movie;
            this.appendChild(carouselItem);
        });

        const control = document.createElement("div");
        control.setAttribute("class", "flex gap-2 justify-center -mt-8 md:-mt-14 mb-8 md:mb-4");

        for (const index in this._movies) {
            const controlBullet = document.createElement("div");
            controlBullet.setAttribute("class", `control-bullet w-2 h-2 ${this.active == index ? "bg-white" : "bg-gray-400"} rounded-full cursor-pointer`);
            controlBullet.addEventListener("click", () => {
                this.active = index;
                window.clearInterval(this.timer);
                this.timer = window.setInterval(this.ticker, 5000);
                this.changeActive();
            });
            control.appendChild(controlBullet);
        }

        this.appendChild(control);
    }

    changeActive() {
        const CarouselListItem = this.getElementsByTagName("carousel-item");
        const controlBullet = this.getElementsByClassName("control-bullet");
        for (let index = 0; index < CarouselListItem.length; index++) {
            if (index == this.active) {
                CarouselListItem.item(index).classList.remove("hidden");
                controlBullet.item(index).classList.remove("bg-gray-400");
                controlBullet.item(index).classList.add("bg-white");
            } else {
                CarouselListItem.item(index).classList.add("hidden");
                controlBullet.item(index).classList.remove("bg-white");
                controlBullet.item(index).classList.add("bg-gray-400");
            }
        }
    }
}

customElements.define("carousel-list", CarouselList);
