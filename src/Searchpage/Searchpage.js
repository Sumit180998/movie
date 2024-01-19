import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import axios from "axios";
import './Searchpage.css';
// import '../Home/Home.css'
import { useNavigate,useParams} from 'react-router-dom';

function Searchpage() {
  const navigate = useNavigate();
    
    const { id} = useParams()
    const [Data, setData] = useState([]);
    const [Searchs, setSearchs] = useState(id.split("=")[1]);
    const [sidebar, setSidebar] =useState(false)
  
    const showSidebar = () => setSidebar(!sidebar)
    

const Movie = (movie,id,) => {

navigate(`/Movie/${id}`,
       {
    state:{
      id
    }
  }
       );
    console.log(  id + '')
  }
  //   function eApi() {
	// // https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1
  //       axios.get(`https://api.themoviedb.org/3/search/movie?query=${state.Search} &include_adult=false&language=en-US&page=1`,{
	// 		headers: {
	// 			accept: 'application/json',
	// 			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
	// 		  } 
	// 	}).then((response) => {
          
  //         console.log(response.data.results)
  //         setData(response.data.results)
  //       }).catch(error => {
  //         console.log(error)
  //         // setError(error);
  //       });
  //     };
  function Homepage(){
    navigate(`/`
     );
  }
      function eApis(){
        
        console.log(id.split("=")[1])
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${Searchs}&include_adult=false&language=en-US&page=1`,{
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
			  } 
		}).then((response) => {
      
      console.log(response.data)
          console.log(response.data.results)
          setData(response.data.results)
        }).catch(error => {
          console.log(error)
          // setError(error);
        });
      };
      const Detailpage = (id, moviename) => {
        const str =moviename
        var replaced = str.split(' ').join('_');
    
            navigate(`/MovieDetail/${id}_${replaced}`
            , {
          state:{
            id
          }
        } );
          console.log(id, moviename)
        }
      useEffect(() => {
        
        eApis() 
		
   
	}, [Searchs]);
  return (
    <div className="">
      <header>
       <div className='mobile_menu'>
        <nav onClick={showSidebar}><i className="fa-solid fa-bars white"></i>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul >
            {/* <li className="" onClick={handleOpen}>
                  <a target="_blank">Movie</a>
                  { open?(
                   <ul>
                     <li className="dropDown">
                          <a href="" target="_blank">Popular</a>
                                              
                      </li>
                      <li><a  target="_blank">Now Playing</a></li>
                      <li><a href="" target="_blank">Upcoming </a></li>
                      <li><a href="" target="_blank">Upcoming </a></li>
                      <li><a href="" target="_blank">Top Rated </a></li>
                  </ul>):null
                  
                  }
              </li> */}
              <li className="" onClick={() => { Movie("Popular",'popular') }}>Popular
                  {/* { open?(
                   <ul>
                     
                     <li className="dropDown">
                          <a href="" target="_blank">Popular</a>
                                              
                      </li>
                      <li><a href="" target="_blank">Airing Today</a></li>
                      <li><a href="" target="_blank">On TV</a></li>
                      <li><a href="" target="_blank">Top Rated</a></li>
                  </ul>):null
                  
                  } */}
              </li>
              {/* <li className="" onClick={handleOpen}>
                  <a target="_blank">Now Playing</a>
                  { open?(
                   <ul>
                      <li className="dropDown">
                          <a href="" target="_blank">Popular People</a>                      
                      </li>
                      
                  </ul>):null
                  
                  }
              </li> */}
             <li className=""  onClick={() => { Movie("Top Rated","top_rated") }}>Top Rated 
                  {/* { open?(
                   <ul>
                     <li className="dropDown">
                          <a href="" target="_blank">Discussions</a>
                                              
                      </li>
                      <li><a href="" target="_blank">Leaderboard</a></li>
                      <li><a href="" target="_blank">Support</a></li>
                      <li><a href="" target="_blank">API</a></li>
                  </ul>):null
                  
                  } */}
              </li>
              
            </ul>
        </nav>
        </nav>
        <nav onClick={() => { Homepage() }}><img src="/logo.png" alt="Motionmovie" width="100" height="39"/></nav>
        <nav> 
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
             </nav>
       
       </div>
     <div className='contents'>
      <nav className=''> 
      
          <ul >
         <li onClick={() => { Homepage() }}>  <img src="/logo.png" alt="Motionmovie" width="80" height="50"/></li> 
              {/* <li className="dropDown-menu">
                  <a href="" target="_blank">Movie</a>
                  <ul>
                      <li className="dropDown">
                          <a href="" target="_blank">Popular</a>
                                              
                      </li>
                      <li><a href="" target="_blank">Now Playing</a></li>
                      <li><a href="" target="_blank">Upcoming </a></li>
                     
                      <li><a href="" target="_blank">Top Rated </a></li>
                  </ul>
              </li> */}
            <li className="dropDown-menu" onClick={() => { Movie("Popular",'popular') }}>Popular
                  {/* <ul>
                      <li className="dropDown">
                          <a href="" target="_blank">Popular</a>
                                              
                      </li>
                      <li><a href="" target="_blank">Airing Today</a></li>
                      <li><a href="" target="_blank">On TV</a></li>
                      <li><a href="" target="_blank">Top Rated</a></li>
                  </ul> */}
              </li>
              {/* <li className="dropDown-menu">
                  <a href="" target="_blank">Now Playing</a>
                  <ul>
                      <li className="dropDown">
                          <a href="" target="_blank">Popular People</a>                      
                      </li>
                      
                  </ul>
              </li> */}
             <li className="dropDown-menu" onClick={() => { Movie("Top Rated","top_rated") }}>Top Rated 
                  {/* <ul>
                      <li className="dropDown">
                          <a href="" target="_blank">Discussions</a>
                                              
                      </li>
                      <li><a href="" target="_blank">Leaderboard</a></li>
                      <li><a href="" target="_blank">Support</a></li>
                      <li><a href="" target="_blank">API</a></li>
                  </ul> */}
              </li>
             
              
          </ul>
      </nav>
      <nav> 
          <ul>
             
              {/* <li className="dropDown-menu">
              <div id="inner_search_formS" >
              <label>
                <input  id="inner_search_v4S"  type="text"  autocorrect="off"  autocomplete="off" spellcheck="false"
                 value={Searchs}
                 onChange={e => setSearchs(e.target.value) }
                   placeholder="Search for a movie"  />
              </label>
           
              <input type="submit" className='buttonS' value="Search" fdprocessedid="15875j" onClick={eApis}/>
          
            
            </div>
                 
              </li> */}
              {/* <li className="dropDown-menu">
                  <a href="" target="_blank">Services</a>
                 
              </li> */}
              
              
             
              
          </ul>
      </nav>
      </div>
  </header>
    
      <div className='Search_result'>
      <div id="inner_search_formx" >
              <label>
                <input  id="inner_search_v4S2"  type="text"  autocorrect="off"  autocomplete="off" spellcheck="false"
                 value={Searchs}
                 onChange={e => setSearchs(e.target.value) }
                   placeholder="Search for a movie"  />
              </label>
              {/* <button className="custom-btn btn-3" type="button" onClick={eApis}><span>Submit</span> </button> */}
              <input type="submit" className='buttonS2' value="Search" fdprocessedid="15875j" onClick={eApis}/>
          
            
            </div>
      {Data.map((movie) => (<div>  
        <div className='resultpage' onClick={() => { Detailpage(movie.id,movie.title) }}> 
        <div className='card4'>
            <div className='cardsWrapper'>
                <div className='Imagecard'>
                <img
  loading="lazy"
  className="poster"
  src={"https://www.themoviedb.org/t/p/w94_and_h141_bestv2/"+ movie.poster_path}
  alt=""
/>
                </div>
                <div className='detailscard'>
                    <p><strong>{movie.title}</strong> </p>
                    <p>{movie.release_date}</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
            
            </div>
             </div>
      </div>))}
      </div>
      <Footer/>
    </div>
  );
}

export default Searchpage;
