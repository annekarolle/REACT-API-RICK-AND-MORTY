import { Container } from "./style.js"

const CharCard = ({id, name, episode, gender, image, species, status}) => {
    console.log(episode)
    
    return(      
           <Container>
            <li key={id} >            
            <img src={image}></img>  
            <span>Personagem info:</span>          
            <h2>Nome: {name}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <div className="containerStatus">
            <div className={status}></div>
            <h2>Status: {status}</h2>            
            </div>
            </li>
            </Container>       
             
    );
}

export default CharCard