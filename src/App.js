import styled from 'styled-components';
import Timer from './Timer';
import WordDisplay from './Words';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2em;
background-color: rgb(179, 179, 179)
`;

const App = () => {
 
  // Get array of words and generate array of indexes in random order
  return (
    <AppContainer>
      <Timer/>
      <WordDisplay/>
    </AppContainer>
  );
}

export default App;
