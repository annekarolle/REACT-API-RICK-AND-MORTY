import './App.css';
import { useEffect, useState } from 'react';
import Character from './components/Chacarcters';
import { ButtonStyled } from './styledComponents/ButtonStyled';
import {BsArrowRightCircle}  from "react-icons/bs"
import {BsArrowLeftCircle}  from "react-icons/bs"



 function App() {
const [characterList , SetCharacterList ] = useState([])
const [currentPage, SetCurrentPage] = useState("https://rickandmortyapi.com/api/character/")

useEffect( ()  => {
  fetch(currentPage)
  .then((response) => response.json())
  .then((response) => SetCharacterList(response))
  .catch((err) => console.log('Erro dentro do fetch character: ', err))
}, [currentPage])

  return (
    <div className="App">
       <h1>Meus personagens</h1> 
      <div className="App-header">
        <ButtonStyled onClick={() => SetCurrentPage(characterList.info.prev)}>          
          <BsArrowLeftCircle/>          
          </ButtonStyled> 

        <Character characterList={characterList.results} /> 

        <ButtonStyled onClick={() => SetCurrentPage(characterList.info.next)}>
          <BsArrowRightCircle/>
          </ButtonStyled>  
        <div>
          
       
        
        </div>
      </div>
    </div>
  );
}

export default App;
