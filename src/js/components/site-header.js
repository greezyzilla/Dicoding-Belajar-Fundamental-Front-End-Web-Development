class SiteHeader extends HTMLElement {
    set setting(setting) {
        this._setting = setting;
        this.render();
    }

    render() {
        this.setAttribute("class", "flex justify-between text-white text-sm px-12 py-8 z-50 relative items-center w-screen box-border");
        this.innerHTML = `
            <a href="./" class="w-56 font-semibold text-lg">My<span class="text-yellow-600">Movie</span>List</a>
            <div class="w-1/2 md:w-1/3 px-4 py-2 rounded-xl md:rounded-3xl gap-4 bg-gray-900 flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <form action='./browse.html' class="w-full order-first md:order-last">
                    <input style="background: none" class="w-full border-none text-white focus:outline-none" autocomplete="off" type="text" id="search" spellcheck="false" placeholder="Search your movie trought the world" name="query" value='${this._setting.query?.toString() || ""}'>
                </form>
            </div>
            <nav class="fixed bottom-0 left-0 z-50 md:relative shad border-t-2 border-gray-800 md:border-0">
                <ul class="gap-12 md:gap-4 p-4 md:p-0 flex list-none justify-center md:justify-between w-screen md:w-full bg-gray-900 md:bg-transparent">
                    <li class="${this._setting.active == "home" && "text-yellow-600"} hover:opacity-80">
                        <a href='./index.html' class="flex flex-col items-center gap-1">
                            <svg class="block md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="${this._setting.active == "list" && "text-yellow-600"} hover:opacity-80">
                        <a href='./list.html' class="flex flex-col items-center gap-1">
                            <svg class="block md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                            <span>Watched List</span>
                        </a>
                    </li>
                    <li class="${this._setting.active == "about" && "text-yellow-600"} hover:opacity-80">
                        <a href='./about.html' class="flex flex-col items-center gap-1">
                            <svg class="block md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            <span>About</span>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("site-header", SiteHeader);
