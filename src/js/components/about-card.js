class AboutCard extends HTMLElement {
    set item(item) {
        this._item = item;
        this.render();
    }

    connectedCallback() {
        this.setAttribute("class", "flex flex-col gap-2 items-center w-16");
    }

    render() {
        this.innerHTML = `
            <img class="w-12 h-12 rounded-md ${this._item.style}" ${this._item.image && `src=${this._item.image}  alt="${this._item.label} image"`}>
            <p class="text-xs text-center text-gray-300">${this._item.label}</p>
        `;
    }
}

customElements.define("about-card", AboutCard);
