import styled from 'styled-components';
import ButtonGrouping from './ButtonGrouping';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';

const ThemePickerContainer = styled.div`
.theme-btn.light {
  background-image: url(${props => props.sun});
}

.theme-btn.dark {
  background-image: url(${props => props.moon});
}

.theme-btn {
  background-position: center;
  background-size: 55%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  min-width: 3em;
  border-radius: .5em;
}
`;

const ThemePicker = ({ buttons, handleClick }) => {
    return (
        <ThemePickerContainer sun={sun} moon={moon} onClick={handleClick}>
            <ButtonGrouping buttons={buttons} />
        </ThemePickerContainer>
    );
};

export default ThemePicker;