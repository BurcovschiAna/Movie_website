let allMovies = [
    {
        movieName: "A Star is Born",
        moviePoster: "./assets/img/movie/A star is born movie.jpg",
        movieRating: "5",
        movieIndex: "0",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Drama"]
    },
    {
        movieName: "Avatar",
        moviePoster: "./assets/img/movie/Avatar movie.jpg",
        movieRating: "5",
        movieIndex: "1",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F"]
    },
    {
        movieName: "Avengers Infinity War",
        moviePoster: "./assets/img/movie/Avengers infiny war movie.jpg",
        movieRating: "4.9",
        movieIndex: "2",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Alligiant",
        moviePoster: "./assets/img/movie/Alligiant.jpg",
        movieRating: "2",
        movieIndex: "3",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F"]
    },
    {
        movieName: "Avengers",
        moviePoster: "./assets/img/movie/Avengers movie.jpg",
        movieRating: "4.5",
        movieIndex: "4",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Damsel",
        moviePoster: "./assets/img/movie/Damsel movie.jpg",
        movieRating: "2.5",
        movieIndex: "5",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Drama"]
    },
    {
        movieName: "Divergent",
        moviePoster: "./assets/img/movie/Divergent movie.jpg",
        movieRating: "3.5",
        movieIndex: "6",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Drama"]
    },
    {
        movieName: "Ferdinant",
        moviePoster: "./assets/img/movie/Ferdinant movie.jpg",
        movieRating: "4",
        movieIndex: "7",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "Grinch",
        moviePoster: "./assets/img/movie/Grinch movie.jpg",
        movieRating: "4.5",
        movieIndex: "8",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "Grown ups 2",
        moviePoster: "./assets/img/movie/Grown ups 2 movie.jpg",
        movieRating: "4",
        movieIndex: "9",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Comedies"]
    },
    {
        movieName: "Grown ups",
        moviePoster: "./assets/img/movie/Grown ups movie.jpg",
        movieRating: "4",
        movieIndex: "10",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Comedies"]
    },

    {
        movieName: "Hobbit the Battle of the Five Armies",
        moviePoster: "./assets/img/movie/Hobbit the battle of the five armies.jpg",
        movieRating: "3",
        movieIndex: "11",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Hobbit the Disolation of Smaug",
        moviePoster: "./assets/img/movie/Hobbit the disolation of smaug.jpg",
        movieRating: "3.5",
        movieIndex: "12",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Hobbit",
        moviePoster: "./assets/img/movie/Hobbit.jpg",
        movieRating: "4",
        movieIndex: "13",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Hotel Transylvania",
        moviePoster: "./assets/img/movie/Hotel transylvania 1 movie.jpg",
        movieRating: "4.5",
        movieIndex: "14",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "Hotel Transylvania 2",
        moviePoster: "./assets/img/movie/Hotel transylvania 2 movie.jpg",
        movieRating: "4.5",
        movieIndex: "15",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    
    {
        movieName: "Hotel Transylvania a Monster Vacation",
        moviePoster: "./assets/img/movie/Hotel transylvania 3 movie.jpg",
        movieRating: "4",
        movieIndex: "16",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    
    {
        movieName: "Hotel Transylvania Trans-formania",
        moviePoster: "./assets/img/movie/Hotel transylvania 4 movie.jpg",
        movieRating: "4.5",
        movieIndex: "17",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    

    {
        movieName: "In the Tall Grass",
        moviePoster: "./assets/img/movie/In the tall grass movie.jpg",
        movieRating: "3",
        movieIndex: "18",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    
    {
        movieName: "Inception",
        moviePoster: "./assets/img/movie/inception movie.jpg",
        movieRating: "5",
        movieIndex: "19",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Action", "Drama", "S-F"]
    },
    
    {
        movieName: "Insurgent",
        moviePoster: "./assets/img/movie/Insurgent movie.jpg",
        movieRating: "3",
        movieIndex: "20",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Drama"]
    },
    
    {
        movieName: "Iron Man 2",
        moviePoster: "./assets/img/movie/Iron man 2 movie.jpg",
        movieRating: "5",
        movieIndex: "21",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    
    {
        movieName: "Iron Man 3",
        moviePoster: "./assets/img/movie/Iron man 3 movie.webp",
        movieRating: "5",
        movieIndex: "22",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    
    {
        movieName: "Iron Man",
        moviePoster: "./assets/img/movie/Iron man movie.jpg",
        movieRating: "5",
        movieIndex: "23",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    
    {
        movieName: "IT",
        moviePoster: "./assets/img/movie/IT movie.jpg",
        movieRating: "4",
        movieIndex: "24",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    
    {
        movieName: "John Wick 2",
        moviePoster: "./assets/img/movie/John Wivk 2 movie.jpg",
        movieRating: "2",
        movieIndex: "25",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Action"]
    },
    {
        movieName: "John Wick",
        moviePoster: "./assets/img/movie/John Wivk movie.jpg",
        movieRating: "2",
        movieIndex: "26",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Action"]
    },
    {
        movieName: "Leo",
        moviePoster: "./assets/img/movie/Leo movie'.jpg",
        movieRating: "4.5",
        movieIndex: "27",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "Liar Liar",
        moviePoster: "./assets/img/movie/Liar liar movie.webp",
        movieRating: "2",
        movieIndex: "28",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["comedies"]
    },
    {
        movieName: "Little Women",
        moviePoster: "./assets/img/movie/Little women movie.jpg",
        movieRating: "3",
        movieIndex: "29",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory:["Drama"]
    },
    {
        movieName: "Lord of the Rings",
        moviePoster: "./assets/img/movie/Lord of the rings 1 movie.jpg",
        movieRating: "3",
        movieIndex: "30",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Lord of the Rings The Return on the King",
        moviePoster: "./assets/img/movie/Lord of the rings The return on the king movie.jpg",
        movieRating: "3.5",
        movieIndex: "31",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Lord of the Rings the Two Towers",
        moviePoster: "./assets/img/movie/Lord of the rings the two towers movie.jpg",
        movieRating: "3",
        movieIndex: "32",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Man of Steel",
        moviePoster: "./assets/img/movie/Man of steel.jpg",
        movieRating: "4",
        movieIndex: "33",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Matrix 2 ",
        moviePoster: "./assets/img/movie/Matrix 2 movie.jpg",
        movieRating: "3.5",
        movieIndex: "34",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Matrix Reloaded",
        moviePoster: "./assets/img/movie/Matrix reloaded movie.jpg",
        movieRating: "3.5",
        movieIndex: "35",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Meg 2",
        moviePoster: "./assets/img/movie/Meg 2 movie.jpg",
        movieRating: "3.5",
        movieIndex: "36",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Mr Bean Holiday",
        moviePoster: "./assets/img/movie/Mr Bean Holiday movie.jpg",
        movieRating: "4",
        movieIndex: "37",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family", "Comedies"]
    },
    {
        movieName: "Mummy",
        moviePoster: "./assets/img/movie/Mymmt movie.webp",
        movieRating: "3",
        movieIndex: "38",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Orion and the Dark",
        moviePoster: "./assets/img/movie/Orion and the dark movie.jpg",
        movieRating: "4",
        movieIndex: "39",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "Red Notice",
        moviePoster: "./assets/img/movie/Red notice movie.jpg",
        movieRating: "2.5",
        movieIndex: "40",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Drama", "Action"]
    },
    {
        movieName: "Red One",
        moviePoster: "./assets/img/movie/Red One movie.jpg",
        movieRating: "4",
        movieIndex: "41",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action", "Comedies"]
    },
    {
        movieName: "Split",
        moviePoster: "./assets/img/movie/Split movie.jpg",
        movieRating: "4.5",
        movieIndex: "42",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    {
        movieName: "The Dark Night",
        moviePoster: "./assets/img/movie/The dark night.jpg",
        movieRating: "4.5",
        movieIndex: "43",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "The Lorax",
        moviePoster: "./assets/img/movie/The lorax movie.jpg",
        movieRating: "4",
        movieIndex: "44",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "The Nun",
        moviePoster: "./assets/img/movie/The nun movie.jpg",
        movieRating: "3.5",
        movieIndex: "45",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    {
        movieName: "The Purge",
        moviePoster: "./assets/img/movie/The purge movie.jpg",
        movieRating: "3",
        movieIndex: "46",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    {
        movieName: "The Sea Best",
        moviePoster: "./assets/img/movie/The sea best movie.jpg",
        movieRating: "4.5",
        movieIndex: "47",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family"]
    },
    {
        movieName: "The Shallows",
        moviePoster: "./assets/img/movie/The shallows movie.jpg",
        movieRating: "3.5",
        movieIndex: "48",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Horror"]
    },
    {
        movieName: "Thor",
        moviePoster: "./assets/img/movie/Thor movie.jpg",
        movieRating: "4.5",
        movieIndex: "49",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Thor Ragnarok",
        moviePoster: "./assets/img/movie/Thor ragnarok movie.jpg",
        movieRating: "4.5",
        movieIndex: "50",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Thor the Dark World",
        moviePoster: "./assets/img/movie/Thor the dark world movie.jpg",
        movieRating: "4",
        movieIndex: "51",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Venom Let There Be Carnage",
        moviePoster: "./assets/img/movie/Venom let there be carnage.jpg",
        movieRating: "3.5",
        movieIndex: "52",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Venom",
        moviePoster: "./assets/img/movie/Venom.webp",
        movieRating: "4.5",
        movieIndex: "53",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["S-F", "Action"]
    },
    {
        movieName: "Wanted",
        moviePoster: "./assets/img/movie/Wanted movie.jpg",
        movieRating: "2.5",
        movieIndex: "54",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Action"]
    },
    
    {
        movieName: "Wonder",
        moviePoster: "./assets/img/movie/Wonder movie.jpg",
        movieRating: "5",
        movieIndex: "55",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Kids & Family", "Drama"]
    },
    {
        movieName: "Zohan",
        moviePoster: "./assets/img/movie/Zohan movie.jpg",
        movieRating: "4",
        movieIndex: "56",
        moviePath: "./assets/img/20th Century Fox Intro [HD].mp4",
        movieCategory: ["Comedies"]
    },
    
]