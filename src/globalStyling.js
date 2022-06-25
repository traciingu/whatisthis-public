import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    font-family: sans-serif;
    background-color: ${props => props.theme['background-color']};
    color: ${props => props.theme['color']};
    transition: background-color .5s, color .5s;
}

input[type="button"], input[type="submit"]{
    background-color: ${props => props.theme['element-background-color']};
    color: ${props => props.theme['element-color']};
    
    &:hover {
           background-color: ${props => props.theme['element-background-color-active']};
           color: ${props => props.theme['element-color-active']};
    }
    
    &.selected {
        background-color: ${props => props.theme['element-background-color-active']};
        color: ${props => props.theme['element-color-active']};
    }
}

input[type="text"] {
    border-radius: 5px;
    border-color: transparent;

    &:disabled {
        background-color: ${props => props.theme['element-background-color']};
    }
}
`;

export default GlobalStyle;