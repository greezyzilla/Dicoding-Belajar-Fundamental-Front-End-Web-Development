import "./about-card.js";

class AboutCardList extends HTMLElement {
    set items(items) {
        this._items = items;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "flex gap-4 justify-center");
    }

    render() {
        this.innerHTML = "";
        this._items.forEach((item) => {
            const paletteCard = document.createElement("about-card");
            paletteCard.item = item;
            this.appendChild(paletteCard);
        });
    }
}

customElements.define("about-card-list", AboutCardList);
