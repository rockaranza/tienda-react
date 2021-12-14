import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemsListContainer greeting="Bienvenido Usuari@"/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
