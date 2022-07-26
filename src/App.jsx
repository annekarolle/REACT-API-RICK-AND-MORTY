import './App.css';
import { useEffect, useState } from 'react';
import Character from './components/Chacarcters';
// import CharCard from './components/CharCard';


 function App() {
const [characterList , SetCharacterList ] = useState([])

useEffect( ()  => {
  fetch("https://rickandmortyapi.com/api/character/")
  .then((response) => response.json())
  .then((response) => SetCharacterList(response))
  .catch((err) => console.log('Erro dentro do fetch character: ', err))
}, [])

  return (
    <div className="App">
      <div className="App-header">
        <Character characterList={characterList.results} />    
      </div>
    </div>
  );
}

export default App;
