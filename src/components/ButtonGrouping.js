import { useState } from "react";
import Button from "./Button";

const ButtonGrouping = ({ buttons, canSelect = true }) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [buttonActiveStates, setButtonActiveState] = useState(Object.keys(buttons).map((key) => buttons[key]['isSelected']));

    const handleButtonClick = (e) => {
        const newButtonActiveStates = [...buttonActiveStates];
        const newActiveButtonIndex = e.target.dataset.index;

        newButtonActiveStates[activeButtonIndex] = false;
        newButtonActiveStates[newActiveButtonIndex] = true;

        setActiveButtonIndex(newActiveButtonIndex);
        setButtonActiveState(newButtonActiveStates);

        buttons[newActiveButtonIndex].handleClick(e);
    };

    return (
        <div>
            {buttons.map((button, index) => {
                const buttonProps = {
                    value: button.value,
                    className: button.className,
                    isSelected: buttonActiveStates[index],
                    handleClick: (canSelect ? handleButtonClick : button.handleClick),
                    index
                };

                if (button.type) {
                    buttonProps['type'] = button.type;
                }

                return (<Button {...buttonProps} />);
            })}
        </div>);
};

export default ButtonGrouping;