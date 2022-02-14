var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: "Spanish"
};

// Adding
movie.cast = ['James Streart', 'Donna Read']
movie.rating = {
    audience: 94,
    critics: 95
}

// Replacing
movie.language = 'English'
movie['subtitle-language'] = 'German'

// Deleting
delete movie.year


console.log(movie);

// Two ways of accessing values
console.log(movie['title']);
console.log(movie.title)


for (var key in movie){
    console.log(key)
}

var keys = Object.keys(movie)
console.log(keys);