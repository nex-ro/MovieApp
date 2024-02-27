import "../App.css";
import Nav from "../component/Nav";
import{getPeople,searchMethod}from '../method/getMovie'
import { useEffect, useState } from "react";
import { Link ,Params} from "react-router-dom";


function Actor() {
 const [getMovie,setMovie]=useState([]);
 useEffect(()=>{
    getPeople().then((data) => { setMovie(data) })
 },[])
 const stlyeeNav={
    width: "100%",
    marginRight:"0px",
    borderBottomRightRadius:"0px",
    borderBottomLeftRadius :"0px",
    padding:"0px",
 };
const Searching=(q)=>{
  if (q.length > 3) {
    searchMethod(q).then((item)=>{
      setMovie(item)
    })
  }else{
    getPeople().then((data) => { 
    setMovie(data) 
    })
  }
 
}
  const StyleLink = {
    color: 'inherit',
    textDecoration: 'none',
  };
const Callcard = () => {
  return getMovie.map((movie)=>{
    let poster="https://assets-a1.kompasiana.com/items/album/2021/08/14/images-6117992706310e0d285e54d2.jpeg"
    if(movie.profile_path ){
      poster=process.env.REACT_APP_BASEIMGURL+"/"+movie.profile_path
    }
    return (
      <div className="card">
            <img src={poster} alt="" />
            <p className="title">{movie.name}</p>
          </div>
    )
   })
}
  return (
    <div className="App">
      <div className="bigContainer">
        <div className="layer">
          <header>
            <div style={stlyeeNav} class="nav-wrapper">
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
          
        </div>
      </div>
      <main>
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
export default Actor;
