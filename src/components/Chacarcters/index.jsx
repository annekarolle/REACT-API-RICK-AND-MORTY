import CharCard from "../CharCard/index.jsx"
import './style.css'

const Character = ({characterList}) => { 
    console.log(characterList)
   return (
    <>
    <h1>Meus personagens</h1> 
    <ul>
    {
        characterList.map((char) =>
        <CharCard 
        id={char.id} 
        name={char.name} 
        episode={char.episode}
        gender={char.gender} 
        image={char.image}
        species={char.species}
        status={char.status}
    />)    
    }
    </ul>
    </>
   )

}

export default Character