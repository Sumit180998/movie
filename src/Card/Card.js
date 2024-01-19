import './Card.css'
import { useLocation ,useNavigate} from 'react-router-dom';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Card(movie){
  const navigate = useNavigate();
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
  // console.log(movie.title)
  // console.log(movie.movie.title)
    return(
      // <div className="container">
        <div className="cellphone-containers" onClick={() => { Detailpage(movie.movie.id,movie.movie.title) }}>
       <div className='circlelist'>
       <CircularProgressbar value={Math.round((movie.movie.vote_average)*10) } text={`${Math.round((movie.movie.vote_average)*10) }%`}
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
        pathColor: `rgba(0, 175, 0, ${Math.round((movie.movie.vote_average)*10) / 100})`,
        textColor: '#fff',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })} />
         </div>
        <div className="movie">
        <div className="movie-img">
       
        <img
  loading="lazy"
  className="poster"
  src={"https://www.themoviedb.org/t/p/w220_and_h330_face" +movie.movie.poster_path}
  alt=""
/>

        </div>
        </div>
        
        <div className="mr-grid">
        <p className='mr-grid_name' id='grid_name'>{movie.movie.title}</p>
        <p>{movie.movie.release_date}</p>
     </div>

        </div>
      // </div>
    
    )
}
export default Card;