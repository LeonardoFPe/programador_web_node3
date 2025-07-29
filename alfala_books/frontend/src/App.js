import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;

    li {
    list-style: none;
}
`

function App() {
  return (
    <div className="App">
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
      < AppContainer />
    </div>
  );
}

export default App;
