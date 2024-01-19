import './MovieDetail.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import React, {useState, useEffect} from 'react'
import { useLocation ,useNavigate,useParams} from 'react-router-dom';

function MovieDetail() {
    const { state } = useLocation();
    const { id} = useParams()
    const[DataMovie, setDataMovie]=useState([])
    const[DataCast, setDataCast]=useState([])
    const[Datagenres, setDatagenres]=useState([])
    const[DataSpecialcrew, setDataSpecialcrew]=useState([])
    const navigate = useNavigate();
  const Detailpage = (id, name) => {
    const str =name
    var replaced = str.split(' ').join('_');

        navigate(`/PeopleDetail/${id}_${replaced}`
        , {
      state:{
        id
      }
    } );
      console.log(id, name)
    }
    
    function movie_Details_name() {
	
        axios.get(`https://api.themoviedb.org/3/movie/${id.split("_")[0]}?language=en-US`,{
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
			  } 
		}).then((response) => {
          
          console.log(response.data)
          console.log(response.data.genres)
        setDataMovie(response.data)
        setDatagenres(response.data.genres)
        }).catch(error => {
          console.log(error)
          // setError(error);
        });
      };
      
    
      function movie_Details_Castname() {
	
        axios.get(`https://api.themoviedb.org/3/movie/${id.split("_")[0]}/credits?language=en-US`,{
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
			  } 
		}).then((response) => {
          
          console.log(response.data.cast)
          console.log(response.data.crew)
          setDataCast(response.data.cast)
          let  Specialcrew = response.data.crew.filter(user =>  user.job === 'Director' || user.job === 'Producer' || user.job ===  "Writer");
            console.log(Specialcrew)
            setDataSpecialcrew(Specialcrew)
          
        //   console.log(response.data.genres[0].name)
        
        }).catch(error => {
          console.log(error)
          // setError(error);
        });
      };
      useEffect(() => {
	
		movie_Details_name()
        movie_Details_name()
        movie_Details_Castname()
	}, [id]);
    return (
        <>
        <Navbar/>
     <div className='movie_Details Movie' style={{backgroundImage: `url( "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${DataMovie.backdrop_path}")`}}>
        <div className='Movie_bg'>
            <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-12 themed-grid-col">
           <div className='posters'>
           <img loading="lazy" className="poster" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +DataMovie.poster_path
}  alt=""
/>

           </div>
            </div>
            <div className="col-lg-9 col-md-6 col-sm-12 themed-grid-col">
                <div className='headerposter'>
                    <div className='headerposter1'>
                        <div className='headerposter1_tittle'>
                            <h2>{DataMovie.title} <span>({DataMovie.release_date?DataMovie.release_date.slice(0,4):'0'})</span></h2>
                            <div className='posterfact'>
                                {/* <span>PG</span> */}
                                <span>{DataMovie.release_date}
                                </span>
                                {
        Datagenres.map((genre ,id)=>{
            return( <><span key={id}>{genre.name}</span></>)})}
                            
                                
                                <span>{DataMovie.runtime}</span>
                               
                            </div>
                        </div>
                    </div>
                    <ul className='headeraction'>
                    <li><div className='circlelistd'>
                    <CircularProgressbar value={Math.round((DataMovie.vote_average)*10) } text={`${Math.round((DataMovie.vote_average)*10)}%`}
       strokeWidth={5}
       styles={buildStyles({
       
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
    
        // Text size
        textSize: '25px',
        fontWeight: 600,
        
    
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
    
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
    
        // Colors
        pathColor: `rgba(0, 175, 0, ${Math.round((DataMovie.vote_average)*10)/ 100})`,
        textColor: '#fff',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })} />
       </div></li>
                    {/* <li>nm</li>
                    <li>nm</li>
                    <li>nm</li> */}
                   </ul>
                   <div className='hrader_info'>
                    <h3 className='info_'>{DataMovie.tagline}</h3>
                    {/* <h3 className='info_2'> Overview</h3>
                    <div className='Overview'>
                        <p>{DataMovie.overview}</p>
                    </div> */}
                    <ol className='people images'>
                  {  DataSpecialcrew.map((crews ,id)=>{
            return(  <li className='people_profile'>
            <p className='people_Name' >{crews.name}</p>
            <p className='people_ch'>{crews.job}</p>
        </li>)})}
                         
                    </ol>
                   </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 themed-grid-col" >
            <h3 className='info_2'> Overview</h3>
                    <div className='Overview'>
                        <p>{DataMovie.overview}</p>
                    </div>

            </div>
            </div>
           
        </div>

     </div> 
     <div className='section2_casting'>
        <div className='casting_bg'>
        <div className='row'>
        <div className="col-lg-9 col-md-9 col-sm-12 themed-grid-col"><div className='casting_scrolbar'>
            <h2>Cast</h2>
          
                <ol className='peoplescroller'>
                {
        DataCast.map((x,i)=>{
            return(
                <il className="cast_card" onClick={() => { Detailpage(x.id,x.name) }}>
                    <img loading="lazy"  src={"https://www.themoviedb.org/t/p/w138_and_h175_face" + x.profile_path} alt=""/>
                    <p className='cast_card_name'>{x.original_name}</p>
                    <p className='cast_card_d'>{x.character}</p>
                    </il>
            )})}
                    
                           
                                    </ol>
            
            </div></div>
        <div className="col-lg-3 col-md-3 col-sm-12 themed-grid-col">
            <div className='Detail_movie'>
            <div> <strong>Detail</strong></div>
            <p> <strong>Status</strong> <br/>
            {DataMovie.status}</p>
            <p> <strong>Original Language</strong> <br/>
            {DataMovie.original_language}</p>
            <p> <strong>Budget</strong> <br/>
            $ {DataMovie.budget}</p>
            <p> <strong>Revenue</strong> <br/>
            $ {DataMovie.revenue}</p>
            </div>
        </div>
        </div>
        </div>
        </div>  
        <Footer/>
     </>
        
    );
  }
  
  export default MovieDetail;