import styled from 'styled-components';

const ButtonStyling = styled.input`
    border-radius: 7px;
    border: none;
    padding: .5em 1em;
    margin: 0 .5em;
    margin-top: 1em;
    min-width: 7em;
    font-size: 1rem;
    transition: background-color .1s, color .1s;
`;

const Button = ({ type = "button", value, className = "", isSelected, handleClick, index }) => {
    const buttonProperties = {
        type,
        value,
        className: className + (isSelected ? " selected" : ""),
        onClick: handleClick
    };

    buttonProperties['data-index'] = index;
    /*
    [`data-${value}`]: 'foo',
    type = { type }
            value={value}
            className={className + (isSelected ? " selected" : "")}
            onClick={handleClick}
    */
    return (
        <ButtonStyling {...buttonProperties} />
    );
};

export default Button;