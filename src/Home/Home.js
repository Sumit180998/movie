import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Card from '../Card/Card';
import CardPeople from "../CardPeople/CardPeople";
import { useNavigate } from 'react-router-dom';

function Home(){
  const [Search, setSearch] = useState("");
  const [DataTrend, setDataTrend]=useState([])
  const [DataTrend1, setDataTrend1]=useState([])
  const [TopRated, setTopRated]=useState([])
  const [Popular, setPopular]=useState([])
  const [PopularPeople, setPopularPeople]=useState([])
  const [PeopleTrend, setPeopleTrend]=useState([])

  const navigate = useNavigate();
	const createPost = (movie) => {
		// const str =movie.Movie_name
		// var replaced = str.split(' ').join('_');

        navigate(`/Searchpage/=${Search}`, {
			state:{
        Search
			}
		} );
			console.log(Search + '')
    }
    function Trend_Details_name() {
	
      axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        console.log(response.data)
        setDataTrend(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    function Populars() {
	
      axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        console.log(response.data)
        setPopular(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    function Top_Rated() {
	
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        
       
        console.log(response.data)
        setTopRated(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    function Trend_Details_name1() {
	
      axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        
        console.log(response.data)
        console.log(response.data)
        setDataTrend1(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    function Popular_People() {
	
      axios.get(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        
        console.log(response.data)
        console.log(response.data.results)
        setPopularPeople(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    function Trending_People() {
	
      axios.get(`https://api.themoviedb.org/3/trending/person/day?language=en-US`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {
        
        console.log(response.data)
        console.log(response.data.results)
        setPeopleTrend(response.data.results)
      
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    useEffect(() => {

      Trend_Details_name()
      Trend_Details_name1()
      Top_Rated()
      Populars()
      Popular_People()
      Trending_People()
}, []);
  
    return(
        <div className='Pagewrap'>
          <Navbar/>
     <div id="main" className="index">
        <section className="inner_content new_index">
    <div id="media_v4" className="media discover">
      <div className="column_wrapper">
        <div className="content_wrapper wrap">
          <div className="title">
            <h2>Welcome.</h2>
            <h3>Get ready to explore, discover, and indulge in the wonderful world of entertainment.</h3>
          </div>

          <div className="search">
            <form id="inner_search_form" >
              <label>
                <input dir="auto" id="inner_search_v4"  type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false"
                 value={Search}
                 onChange={e => setSearch(e.target.value) }
                   placeholder="Search for a movie"  fdprocessedid="w3r14a"/>
              </label>
              <input type="submit" value="Search" fdprocessedid="15875j" onClick={() => { createPost(1) }}/>
            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
  </div>
 
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>Today's Popular Pick</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Today </div>
            <div className='selected_button'>  This Week </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
        {
        DataTrend.map((x,i)=>{
            return(<Card movie={x}/>)})}
         
        </div>

      </div>
    </div>

  </div>
  
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>The Talk of the Week</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Top Rate </div>
            <div className='selected_button'>  Most Popular </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
        {
        DataTrend1.map((x,i)=>{
            return(<Card movie={x}/>)})}
          
        </div>

      </div>
    </div>

  </div>
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>Top Rated</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Top Rate </div>
            <div className='selected_button'>  Most Popular </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
        {
        TopRated.map((x,i)=>{
            return(<Card movie={x}/>)})}
          
        </div>

      </div>
    </div>

  </div>
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>Popular</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Top Rate </div>
            <div className='selected_button'>  Most Popular </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
        {
        Popular.map((x,i)=>{
            return(<Card movie={x}/>)})}
          
        </div>

      </div>
    </div>

  </div>
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>Popular People</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Top Rate </div>
            <div className='selected_button'>  Most Popular </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
         {
        PopularPeople.map((x,i)=>{
            return(< CardPeople People={x}/>)})
            } 
          
        </div>

      </div>
    </div>

  </div>
 
  <div className="contents trending no_pad" >
    <div className='column_wrap'>
      <div className='contents_wrap'>
        <div className='column'>
        <div className="column">
    <div className="column_header">
      <h2>Trending People</h2>
      <div className="selector_wrap">
      
          <div className="anchor selected">
            {/* <div className='selected_button'>  Top Rate </div>
            <div className='selected_button'>  Most Popular </div> */}
        </div>
      </div>
    </div>
  </div>
        </div>

        <div className='scrollers' id='scroll'>
         {
        PeopleTrend.map((x,i)=>{
            return(< CardPeople People={x}/>)})
            } 
          
        </div>

      </div>
    </div>

  </div>
 
<Footer/>
        </div>
    )
}
export default Home;