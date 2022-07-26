import { Container } from "./style.js"

const CharCard = ({id, name, episode, gender, image, species, status}) => {   
    
    return(      
           <Container>
            <li key={id} >            
            <div className="containerImagem">
            <img src={image} alt={name}></img></div>          
          <span>Personagem info:</span>          
            <p>Nome: {name}</p>
            <p>Especie: {species}</p>
            <p>Genero: {gender}</p>
            <div className="containerStatus">
            <div className={status}></div>
            <p>Status: {status}</p>            
            </div>      
            </li>
            </Container>       
             
    );
}

export default CharCard