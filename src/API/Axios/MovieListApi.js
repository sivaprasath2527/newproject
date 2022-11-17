import { LOAD_MOVIES_ERROR, LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS } from "../Actions/MovieListAction"
import axios from "axios"

// const movieListApiUrl = "https://api.themoviedb.org/3/movie/tt6105098?api_key=fb64a1d63cd3a4452639f83d589d4d5b&language=en-US&append_to_response=callback"
const movieListApiUrl = "https://www.omdbapi.com/?s=avengers&apikey=4df45d13"
export const loadMovies = () => dispatch => {
    dispatch({
        type: LOAD_MOVIES_LOADING,
        payload: {
            show: true,
        },
    });
    axios.get(movieListApiUrl)
        .then((res) => {
            const movieList = res.data;
            dispatch({
                type: LOAD_MOVIES_SUCCESS,
                movies: movieList
            })
        })
        .catch((error) => {
            console.error(error);
        })
}