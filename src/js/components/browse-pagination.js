class BrowsePagination extends HTMLElement {
    set setting(setting) {
        this._setting = setting;
        const paginationPages = Object.keys([...Array(setting.totalPages)]).map((item) => +item + 1);
        const paginationStart = paginationPages.slice(setting.page < 3 ? 0 : setting.page - 3, setting.page + 1 > setting.totalPages ? setting.totalPages : setting.page + 2);
        this.paginationEnd = paginationPages.slice(setting.totalPages <= 6 ? setting.page - 6 : -3);
        const isAggregating = paginationStart.map((item) => this.paginationEnd.includes(item)).reduce((acc, item) => acc && item, true);
        const isContinuing = this.paginationEnd.includes(...paginationStart.slice(-1));
        this.pagination = ["First Page", ...new Set([...paginationStart, !isAggregating && !isContinuing && "decoration", ...this.paginationEnd]), "Last Page"].filter((item) => item);
        this.render();
    }

    render() {
        this.setAttribute("class", "flex gap-2 mt-4");
        this.pagination.forEach((item) => {
            if (item != "decoration") {
                const paginationItem = document.createElement("a");
                if (item == this._setting.page) paginationItem.setAttribute("class", "bg-yellow-600 text-white py-2 px-4 flex items-center justify-center rounded-md text-xs font-semibold hover:opacity-90");
                else paginationItem.setAttribute("class", "bg-gray-100 text-gray-700 py-2 px-4 flex items-center justify-center font-semibold rounded-md text-xs hover:opacity-90");
                paginationItem.innerHTML = item;

                if (item == "First Page") paginationItem.href = `./browse.html?page=${1}${this._setting.category ? "&category=" + this._setting.category : ""}${this._setting.query ? "&query=" + this._setting.query : ""}`;
                else if (item == "Last Page") paginationItem.href = `./browse.html?page=${this.paginationEnd.slice(-1)}${this._setting.category ? "&category=" + this._setting.category : ""}${this._setting.query ? "&query=" + this._setting.query : ""}`;
                else paginationItem.href = `./browse.html?page=${item}${this._setting.category ? "&category=" + this._setting.category : ""}${this._setting.query ? "&query=" + this._setting.query : ""}`;

                this.appendChild(paginationItem);
            } else {
                const pagiantionDecoration = document.createElement("span");
                pagiantionDecoration.innerHTML = "...";
                pagiantionDecoration.classList.add("text-gray-100");
                this.appendChild(pagiantionDecoration);
            }
        });
    }
}

customElements.define("browse-pagination", BrowsePagination);
