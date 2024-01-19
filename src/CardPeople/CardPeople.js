import './CardPeople.css'
import { useLocation ,useNavigate} from 'react-router-dom';
// import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function CardPeople(people){
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
 
  // console.log(people.People.known_for[0].original_title
  //   )
    return(
      <div className="fifty_square">
         <div className="item profile cards" onClick={() => { Detailpage(people.People.id,people.People.name) }}>
            <div className='image_content'>
            <img
  loading="lazy"
  className="poster"
  src={"https://www.themoviedb.org/t/p/w235_and_h235_face" +people.People.profile_path
}
  alt=""
/>
            </div>
            <div className="meta">
        <p className="name">{people.People.name}</p>
        <p className="sub">{people.People.known_for.map((x,i)=>{
            return(<span>{x.title?x.title:x.original_title?x.original_title:x.name }, {" "}</span>)})}</p>
      </div>
         </div>
      </div>
    
    )
}
export default CardPeople;