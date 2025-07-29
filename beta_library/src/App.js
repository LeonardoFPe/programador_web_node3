import styled from 'styled-components';
import Header from './Components/Header';

const AppStyled = styled.div`
  background-color: #808080;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <AppStyled>
        <Header />
      </AppStyled>
    </div>
  );
}

export default App;
