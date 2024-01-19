import './Navbar.css'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [Search, setSearch] = useState("");
    const [sidebar, setSidebar] =useState(false)
    // const [open, setOpen] = useState(true);
    const showSidebar = () => setSidebar(!sidebar)
    // const handleOpen = () => {
    //     // setOpen(!open);
    //   };
      const navigate = useNavigate();
    //   function MovieSe() {
    //     navigate('/Searchpage')
    //   }
      const createPost = () => {
        //   const str =movie.Movie_name
          console.log(Search + '')
  
          navigate(`/Searchpage/=${Search}`, {
              state:{
              Search
              } 
          } );
              
      }
      function Homepage(){
        navigate(`/`
         );
      }

      
	const Movie = (movie,id,) => {
		// const str =movie
		// var replaced = str.split(' ').join('_');

  navigate(`/Movie/${id}`,
         {
			state:{
        id
			}
		}
         );
			console.log(  id+ '')
    }
    return (
        <>

      <header>
       <div className='mobile_menu'>
        <nav onClick={showSidebar}><i className="fa-solid fa-bars white"></i>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul >
            {/* <li className="" onClick={handleOpen}>
                  <a >Movie</a>
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
        <nav onClick={() => { createPost() }}> 
        <i class="fa-solid fa-magnifying-glass"></i>
             </nav>
             
       </div>
       
     <div className='contents'>
      <nav className=''> 
      
          <ul >
         <li onClick={() => { Homepage() }}> <img src="/logo.png" alt="Motionmovie" width="80" height="50"/></li> 
              {/* <li className="dropDown-menu"
                  onClick={() => { Movie(1 ,) }} >Movie
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
                  <a href="" target="_blank" onClick={() => { Movie("Top Weak") }}>Top Weak</a>
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
             
              <li className="dropDown-menu">
              <form id="inner_search_formS" >
              <label>
                <input dir="auto" id="inner_search_v4S"  type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false"
                 value={Search}
                 onChange={e => setSearch(e.target.value) }
                   placeholder="Search for a movie"  fdprocessedid="w3r14a"/>
              </label>
              <input type="submit" className='buttonS' value="Search" fdprocessedid="15875j" onClick={() => { createPost() }}/>
          
            
            </form>
                 
              </li>
              {/* <li className="dropDown-menu">
                  <a href="" target="_blank">Services</a>
                 
              </li> */}
              
              
             
              
          </ul>
      </nav>
      </div>
     
  </header>
 
      </>  
        
    );
  }
  
  export default Navbar;