/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import MovieItems from '../components/MovieItems'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../redux/actions/movie'
import { getCategory, getMovieByCategory } from '../redux/actions/category'
import CategoryItems from '../components/CategoryItems'
const { REACT_APP_BACKEND_URL: URL } = process.env

const Movie = (props) => {

  const {dataMovie} = useSelector(state => state.movie)
  const {dataMovieByCategory} = useSelector(state => state.category)
  const {dataCategory} = useSelector(state => state.category)
  const {pageInfo} = useSelector(state => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovie())
    dispatch(getCategory())
    dispatch(getMovieByCategory(props.match.params.id))
  }, [])
  
    
    return (
      <div className="bg-gray-200 flex flex-row gap-10 px-14 py-10 w-full h-full">
        <div className=" flex flex-col gap-5">
          <h3 className="font-semibold text-2xl">Category</h3>
          <div className="bg-white w-60 shadow-xl">
            {dataCategory.map(category => (
              <CategoryItems key={category.id} click={() => dispatch(getMovieByCategory(category.id))} name={category.name} />
            ))}
          </div>
        </div>

        <div className=" flex flex-1 flex-col items-center gap-4">
          <div className=" grid grid-cols-5 w-full gap-8 p-10">
            {dataMovieByCategory.length === 0 ? (
              <React.Fragment>
                {dataMovie?.map(movie => (
                  <MovieItems click={`/moviedetail/${movie.id}`} key={movie.id} images={`${URL}${movie.picture}`} title={movie.title} />
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {dataMovieByCategory?.map(movie => (
                  <MovieItems click={`/moviedetail/${movie.id}`} key={movie.id} images={`${URL}${movie.picture}`} title={movie.title} />
                ))}
              </React.Fragment>
            )}
          </div>
          <div className="flex flex-row gap-4">
            {pageInfo.nextLink === null ? (
              <button  className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md disabled:opacity-50 transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" disabled>Prev</button>
            ) : (
              <button  className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110">Prev</button>
            )}
            {pageInfo.prevLink === null ? (
              <button  className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md disabled:opacity-50 transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" disabled>Next</button>
            ) : (
              <button  className="bg-red-500 text-white font-semibold py-1 px-5 rounded-md transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110">Next</button>
            )}
          </div>
        </div>
        
      </div>
    )
}

export default Movie