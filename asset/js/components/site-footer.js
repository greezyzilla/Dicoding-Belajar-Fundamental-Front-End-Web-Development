import settings from "../data/settings.js";

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.setAttribute("class", "hidden md:block");
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class='flex gap-4 justify-center mt-16 '>
            ${settings.socials.map((social) => `<a href=${social.link}><img src='${social.image}'  class="w-7 h-7 rounded-sm transform hover:scale-125 transition ease-in-out"></a>`).join("")}
            </div>
            <nav class="mt-4 flex gap-2 justify-center text-white text-xs">
                <a href="./index.html">Home</a>
                <span>|</span>
                <a href="./list.html">Watched List</a>
                <span>|</span>
                <a href="./about.html">About</a>
            </nav>
            <p class="text-center text-gray-400 text-xs my-2">MyMovieList is a property of GreezyZilla ©2021 All Rights Reserved.</p>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
