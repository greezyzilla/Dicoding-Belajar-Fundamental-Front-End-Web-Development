import "./details-person-card.js";

class DetailsPersonList extends HTMLElement {
    set setting(setting) {
        this._setting = setting;
        this.render();
    }

    render() {
        if (this._setting.persons.length > 0) {
            this.setAttribute("id", this._setting.id);
            this.innerHTML = `<h2 class="text-2xl font-semibold text-white mt-8 mb-4">${this._setting.label}</h2>`;

            const personsNode = document.createElement("div");
            personsNode.setAttribute("class", "flex flex-wrap gap-y-4 gap-x-5");
            this._setting.persons.forEach((person) => {
                const personCard = document.createElement("details-person-card");
                personCard.person = person;
                personsNode.appendChild(personCard);
            });

            this.appendChild(personsNode);
        }
    }
}

customElements.define("details-person-list", DetailsPersonList);
