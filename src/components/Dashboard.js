import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { json } from "react-router-dom"
import { loadMovies } from "../API/Axios/MovieListApi"
import MovieListItem from "./MovieListItem"


const Dashboard = () => {
    const movies = useSelector(store => {

        if (store.task.movieList?.Search) {
            return store.task.movieList.Search
        }
        else
            return []
    })


    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(loadMovies())
    }, [dispatcher])

    return (
        <>
            <h1>Dashboard</h1>
            {movies?.map((items) => {
                return (
                <MovieListItem
                    title = {items.Title} 
                    year={items.Year}
                    type={items.Type}
                    poster={items.Poster}
                    
                 />
                )
                })}
                </> )
            
}

export default Dashboard