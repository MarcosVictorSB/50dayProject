const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5edb4db6c75e47b6c5738da0647df52e&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/original/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5edb4db6c75e47b6c5738da0647df52e&query="'

const form = document.getElementById('form')
const search = document.getElementById('search');
const main = document.getElementById('main')
// GET UNITAL MOVIES
getMovies(API_URL);

async function getMovies(url){
   const res = await fetch(url);
   const data = await res.json()
   
   showMovies(data.results)

}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const searchTerm = search.value;
   if(search && searchTerm !== ''){
      getMovies(SEARCH_API + searchTerm)
      search.value = '';
   }else{
      window.location.reload();
   }
})

function showMovies(movies){
   main.innerHTML = ''
   if(movies.length > 0){
      movies.forEach((movie) => {
         const { title, poster_path, vote_average, overview } = movie;
         const movieEl = document.createElement('div');
         movieEl.classList.add('movie');
         movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
               <div class="movie-info">
                  <h3>${title}</h3>
                  <span class="${getClassByRate(vote_average)}">${vote_average}</span>
               </div>
   
               <div class="overview">
                  <h3>Overview</h3>
                  ${overview}
               </div>
         `
         main.appendChild(movieEl)
      });
   }else{
      const H1El = document.createElement('h1');
      H1El.classList.add('result');
      H1El.innerHTML = 'Not Found Movie'
      
      main.appendChild(H1El);
   }
   
}

function getClassByRate(vote){
   if(vote >= 8){
      return 'green';
   }else if (vote >= 5){
      return 'orange';
   }else{
      return 'red';
   }
}