import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greeting="Bienvenido Usuari@"/>
    </div>
  );
}

export default App;
