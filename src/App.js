import styled from 'styled-components';
import WordDisplay from './Words';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2em;
`;

const App = () => {
  const handleClick = async (e) => {
  };

 
  // Get array of words and generate array of indexes in random order
  return (
    <AppContainer>
      <div>
        <input type="button" value="Fetch words" onClick={handleClick} />
      </div>
      <WordDisplay/>
    </AppContainer>
  );
}

export default App;
