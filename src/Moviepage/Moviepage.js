
import './Moviepage.css';
import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import axios from "axios";
import {useParams} from 'react-router-dom';

function Moviepage() {
  // const { state } = useLocation();
  const { id} = useParams()
  const[DataTrend, setDataTrend]=useState([])
  
  function Populars() {
	
    axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,{
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
  useEffect(() => {

    
    Populars()
}, [id]);
  return (
    <div className="App">
      <Navbar/>
      <div className='Moviepage'>
      <div className='row' id='rowMovie'>
      {
        DataTrend.map((x,i)=>{
            return(<div className="col-lg-2 col-md-3 col-sm-6 themed-grid-cols">
           < Card movie={x}/>
            </div>)})}
            
            </div>
      </div>
      <Footer/>
    
    </div>
  );
}

export default Moviepage;