class MovieList {
    constructor(list) {
        this._list = list;
    }

    get list() {
        return this._list;
    }

    add(movie) {
        this._list = [movie, ...this._list];
        localStorage.setItem("watched-list", JSON.stringify(this._list));
    }

    include(movie) {
        return this.list.filter((item) => item.id == movie.id).length > 0;
    }

    remove(movie) {
        this._list = this._list.filter((item) => item.id != movie.id);
        localStorage.setItem("watched-list", JSON.stringify(this._list));
    }
}

const movies = new MovieList(JSON.parse(localStorage.getItem("watched-list")) || []);

export default movies;
