import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyling';
import { themeColours } from './constants/themeConstants';
import { Timer, WordDisplay, DifficultyButtons } from './components';
import ThemePicker from './components/ThemePicker';

const AppContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2em;
text-align: center;
`;

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [wordsData, setWordsData] = useState();

  const handleWordsData = (newWordsData) => {
    setWordsData(newWordsData);
  };

  const handleTimerIsActive = (isActive) => {
    setTimerIsActive(isActive);
  };

  const handleCurrentTheme = (e) => {
    setCurrentTheme(e.target.value.toLowerCase());
  };

  const themeButtons = [
    {
      value: "Light",
      className: "light theme-btn",
      isSelected: true,
      handleClick: handleCurrentTheme
    },
    {
      value: "Dark",
      className: "dark theme-btn",
      isSelected: false,
      handleClick: handleCurrentTheme
    }
  ]

  return (
    <AppContainer>
      <GlobalStyle theme={themeColours[currentTheme]} />
      <ThemePicker buttons={themeButtons}/>
      <Timer handleTimerIsActive={handleTimerIsActive} />
      <WordDisplay
        timerIsActive={timerIsActive}
        wordsData={wordsData}
      />

      {!timerIsActive
        && <DifficultyButtons handleWordsData={handleWordsData} />
      }
    </AppContainer>
  );
}

export default App;
