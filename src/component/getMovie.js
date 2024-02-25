import axios from "axios";

export const getMovieData=async()=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`)
    return dataMovie.data.results
    
}

export const searchMethod=async(q)=>{
    const dataMovie=await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&include_adult=true&language=en-US&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
    return dataMovie.data.results
}