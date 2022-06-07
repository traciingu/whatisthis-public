import { useState } from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import WordDisplay from './WordDisplay';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2em;
background-color: rgb(179, 179, 179);
text-align: center;
`;

const App = () => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const handleTimerIsActive = (isActive) => {
    setTimerIsActive(isActive);
  };

  return (
    <AppContainer>
      <Timer handleTimerIsActive={handleTimerIsActive} />
      <WordDisplay timerIsActive={timerIsActive} />
    </AppContainer>
  );
}

export default App;
