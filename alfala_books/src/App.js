import './App.css';
import Logo from './components/Logo';
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'
import OptionsHeader from './components/OptionsHeader/index.js';


const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <ul className='icones'>
          { icones.map ((icone) => (
            <li className='icone'>
              <img src={icone}></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
