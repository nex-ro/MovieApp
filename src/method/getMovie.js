import axios from "axios";

export const getMovieData=async()=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
    return dataMovie.data.results 
}
export const getMovieOnly=async()=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
    return dataMovie.data.results 
}
export const getTv=async()=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
    // const dataMovie=await axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=2da18f26d962c08becc8acf4a4d6009b")
    return dataMovie.data.results 
}
export const getPeople=async()=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/trending/person/day?language=en-US'&api_key=${process.env.REACT_APP_APIKEY}`)
    console.log(dataMovie.data.results )
    return dataMovie.data.results 
}
export const searchMethod=async(q)=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&include_adult=true&language=en-US&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return dataMovie.data.results
}

