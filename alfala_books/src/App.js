import './App.css';
import Logo from './components/Logo';

import OptionsHeader from './components/OptionsHeader/index.js';
import IconesHeader from './components/IconesHeader/index.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;
