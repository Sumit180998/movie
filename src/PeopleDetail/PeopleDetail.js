import './PeopleDetail.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';

function PeopleDetail() {
    
    const { id} = useParams()
    const[DataPeople, setDataPeople]=useState([])
    const[DataGender  , setDataGender]=useState()
    
    const[DataMovies, setDataMovies]=useState([])
    
  
   
    
    function People_Details_name() {
        console.log(id.split("_")[0])
        // console.log(state.id)
        axios.get(`https://api.themoviedb.org/3/person/${id.split("_")[0]}?language=en-US`,{
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
			  } 
		}).then((response) => {
          
          console.log(response.data)
        //   console.log(response.data.genres[0].name)
        if(response.data.gender === 1){
            setDataGender("Female")

        }
        else{
            setDataGender("Male")

        }
        setDataPeople(response.data)
        // setDatagenres(response.data.genres)
        }).catch(error => {
          console.log(error)
          // setError(error);
        });
      };
      
      function movie_Details_names() {
	
        axios.get(`https://api.themoviedb.org/3/person/${id.split("_")[0]}/movie_credits?language=en-US`,{
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
			  } 
		}).then((response) => {
          
          console.log(response.data.cast)
        setDataMovies(response.data.cast)
        }).catch(error => {
          console.log(error)
          // setError(error);
        });
      };
    
      useEffect(() => {
	
		People_Details_name()
        movie_Details_names()
        // movie_Details_Castname()
	}, [id]);
    return (
        <>
        <Navbar/>
     <div className='movie_Details Peoples' >
        <div className='People_bg'>
            <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-12 themed-grid-col">
           <div className='posters'>
           <img loading="lazy" className="poster" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +DataPeople.profile_path

}  alt=""
/>

           </div>
            </div>
            <div className="col-lg-9 col-md-6 col-sm-12 themed-grid-col">
                <div className='headerposter'>
                    <div className='headerposter2'>
                        <div className='headerposter2_tittle'>
                            <h2>{DataPeople.name}</h2>
                            <div className='posterfact'>
                                {/* <span>PG</span> */}
                               
                            </div>
                        </div>
                    </div>
                   <div className='hrader_infos'>
                  
                    <ol className='people images'>
                    <li className='people_profile'>
            <p className='people_Name' >Department</p>
            <p className='people_ch'>{DataPeople.known_for_department}</p>
            
        </li>
                   <li className='people_profile'>
            <p className='people_Name' >birthday</p>
            <p className='people_ch'>{DataPeople.birthday}</p>
            
        </li>
        <li className='people_profile'>
            <p className='people_Name' >place_of_birth</p>
            <p className='people_ch'>{DataPeople.place_of_birth}</p>
            
        </li>
        <li className='people_profile'>
            <p className='people_Name' >gender</p>
            <p className='people_ch'> {DataGender}</p>
            
        </li>
        <li className='people_profile'>
            <p className='people_Name' >popularity</p>
            <p className='people_ch'> {DataPeople.popularity}</p>
            
        </li>
                         
                    </ol>
                   </div>
                   <h2>known_for</h2>
                   <div className=''>
                <ol className='peoplescroller'>
                {
        DataMovies.map((x,i)=>{
            return(
               < Card movie={x}/>
            )})}
                    
                           
                                    </ol>
            </div>
          
                   
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 themed-grid-col" >
            <h3 className='info_3'> Biography</h3>
                    <div className='Overviews'>
                        <p>{DataPeople.biography}</p>
                    </div>

            </div>
            </div>
           
        </div>

     </div> 
     
        <Footer/>
     </>
        
    );
  }
  
  export default PeopleDetail;