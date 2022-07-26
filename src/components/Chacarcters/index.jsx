import CharCard from "../CharCard/index.jsx"
import './style.css'

const Character = ({characterList}) => {
    console.log("imprimindo character list dentro do character:", characterList)

    if (characterList){
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
    else{
        return (
            <h5> Carregando dados da API...</h5>
        )

    }
    
   

}

export default Character