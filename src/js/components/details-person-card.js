class DetailsPersonCard extends HTMLElement {
    set person(person) {
        this._person = person;
        this.render();
    }

    render() {
        this.innerHTML = `
            <figure class="w-24">
                <div class="rounded-md h-32 bg-cover" style="background-image:url(${this._person.profile_path ? `https://image.tmdb.org/t/p/w500${this._person.profile_path}` : "https://m.media-amazon.com/images/G/01/IMDbPro/images/default_name._V142442227_UY289_CR46,0,196,289_.png"}); box-shadow: inset 0px 0px 100px 100px rgba(0, 0, 0, 0.15);"></div>
                <figcaption class="mt-2 flex flex-col gap-1 text-center">
                    <h3 class="text-gray-100 font-semibold text-sm">${this._person.name}</h3>
                    <span class="text-gray-300 text-xs">as ${this._person.character || this._person.job}</span>
                </figcaption>
            </figure>
        `;
    }
}

customElements.define("details-person-card", DetailsPersonCard);
