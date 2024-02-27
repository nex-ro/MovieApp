import "../App.css";
import Nav from "../component/Nav";
import{getMovieData,searchMethod}from '../method/getMovie'
import { useEffect, useState } from "react";
import { Link ,Params} from "react-router-dom";


function Main() {
 const [getMovie,setMovie]=useState([]);
 const [getJudul,setJudul]=useState("Populer Movies");
 useEffect(()=>{
  getMovieData().then((data) => { setMovie(data) })
 },[])
const Searching=(q)=>{
  if (q.length > 3) {
    searchMethod(q).then((item)=>{
      setMovie(item)
      setJudul(`Result for ${q} ...`)
    })
  }else{
    getMovieData().then((data) => { 
    setMovie(data) 
    setJudul("Populer Movies")})
  }
 
}
  const StyleLink = {
    color: 'inherit',
    textDecoration: 'none',
  };
const Callcard = () => {
  return getMovie.map((movie)=>{
    let poster="https://assets-a1.kompasiana.com/items/album/2021/08/14/images-6117992706310e0d285e54d2.jpeg"
    if(movie.poster_path){
      poster=process.env.REACT_APP_BASEIMGURL+"/"+movie.poster_path
    }
    return (
      <div className="card">
            <img src={poster} alt="" />
            <p className="title">{movie.title}</p>
            <p className="dateRelease">{movie.release_date}</p>
            <p className="rating">{movie.vote_average} <i class='bx bx-star'></i> </p>
          </div>
    )
   })
}
  return (
    <div className="App">
      <div className="bigContainer">
        <div className="layer">
          <header>
            <div class="nav-wrapper">
              <div class="logo-container">
                <Link style={StyleLink} to={"/"}><img
                  class="logo"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="Logo"
                /></Link>
              </div>
              <div className="wraper2">
                <Nav />
                <div className="sideNav">
                  {/* <button onClick={notiff}>Notif</button> */}
                  <i class="bx bxs-bell innerLogo"></i>
                  <i class="bx bxs-book-bookmark innerLogo"></i>
                  <img src="" alt="" class="profil" />
                </div>
              </div>
            </div>
          </header>
          <div className="searchSec">
            <div className="text">
              <p>Welcome</p>
              <br />
              <p>Million Movies,Tv Shows and people Discover it Now</p>
            </div>
            <div className="searchinput">
              <input type="text" class="searchBox" onChange={(q)=>{
                Searching(q.target.value)
              }} />
              <div className="buttonSearch">Search</div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <h1>{getJudul}</h1>
        <div className="devidenCard">
          <Callcard/>
        </div>
      </main>
      <div className="foot">
        <footer>
          <div className="footerSon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg"
              alt=""
              class="logoFooter"
            />
            <div class="isiFooter">
              <p>Hi Deri </p>
            </div>
          </div>
          <div className="footerSon">
            <p>The Basics</p>
          </div>
          <div className="footerSon">
            <p className="center ">Comunity</p>
          </div>
          <div className="footerSon">
            <p>Legal</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Main;
