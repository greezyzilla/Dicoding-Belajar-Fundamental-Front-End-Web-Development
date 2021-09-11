const settings = {
    about: {
        colors: [
            {
                label: "Dark Gray (Accent)",
                style: "border border-white bg-gray-900",
            },
            {
                label: "Indigo (Secondary)",
                style: "border border-white bg-indigo-600",
            },
            {
                label: "Orange (Primary)",
                style: "border border-white bg-yellow-600",
            },
        ],
        stack: [
            {
                label: "HTML",
                image: "https://i.ibb.co/94GWhgV/stack-html.png",
            },
            {
                label: "Javascript",
                image: "https://i.ibb.co/BqNr3b1/stack-javascript.png",
            },
            {
                label: "Webpack",
                image: "https://i.ibb.co/4THBSbC/stack-webpack.png",
            },
            {
                label: "Axios",
                image: "https://i.ibb.co/y5LDMxb/stack-axios.png",
            },
            {
                label: "Tailwind",
                image: "https://i.ibb.co/Jtc68vS/stack-tailwind.png",
            },
            {
                label: "Sweetalert",
                image: "https://i.ibb.co/9GpJHPj/stack-sweetalert.png",
            },
        ],
    },
    movie: {
        display: [
            {
                label: "playing",
                title: "Now Playing Movies",
                url: "https://api.themoviedb.org/3/movie/now_playing?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US",
                parent: "movies-container-playing",
            },
            {
                label: "upcoming",
                title: "Most Upcoming Movies",
                url: "https://api.themoviedb.org/3/movie/upcoming?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US",
                parent: "movies-container-upcoming",
            },
            {
                label: "top",
                title: "Top Rated Movies",
                url: "https://api.themoviedb.org/3/movie/top_rated?api_key=fba11e40d77b925133e081c7a4c7c3d0&language=en-US",
                parent: "movies-container-top",
            },
        ],
        team: [
            {
                label: "Actors",
                id: "actors",
                type: "cast",
                filter: (actor) => Number.parseInt(actor.popularity.toString().split(".").join("")) > 5000,
            },
            {
                label: "Director",
                id: "directors",
                type: "crew",
                filter: (crew) => crew.job.toLowerCase().includes("director"),
            },
            {
                label: "Producer",
                id: "producers",
                type: "crew",
                filter: (crew) => crew.job.toLowerCase().includes("producer"),
            },
        ],
    },
    socials: [
        {
            label: "LinkedIn",
            image: "https://i.ibb.co/sssz1xF/social-linkedin.png",
            link: "https://www.linkedin.com/in/gunawan-wahyu-andreanto-2654a717a/",
        },
        {
            label: "Gmail",
            image: "https://i.ibb.co/tJv0gc4/social-gmail.png",
            link: "mailto:greezyzilla@gmail.com",
        },
        {
            label: "Telegram",
            image: "https://i.ibb.co/tY9VNBL/social-telegram.png",
            link: "https://t.me/greezyzilla",
        },
        {
            label: "Instagram",
            image: "https://i.ibb.co/2dyd62y/social-instagram.png",
            link: "https://instagram.com/greezyzilla",
        },
        {
            label: "Facebook",
            image: "https://i.ibb.co/Yp1Rzqh/social-facebook.png",
            link: "https://facebook.com/gunawan55",
        },
    ],
};
export default settings;
