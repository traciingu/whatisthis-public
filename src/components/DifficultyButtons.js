import { useState, useEffect } from "react";
import { fetchWords } from '../helpers/fetchWords';
import ButtonGrouping from "./ButtonGrouping";

const DifficultyButtons = ({ handleWordsData }) => {
    const [difficulty, setDifficulty] = useState('medium');
    const difficultyLevels = ['Easy', 'Medium', 'Hard', 'Expert'];

    useEffect(() => {
        (async () => {
            const data = await fetchWords(difficulty);
            console.log(data);

            handleWordsData(data);
        })();
    }, [difficulty]);

    const handleClick = (e) => {
        setDifficulty(e.target.value.toLowerCase());
    };

    const difficultyButtons = difficultyLevels.map(level => ({
        value: level,
        handleClick: handleClick,
        isSelected: (level.toLowerCase().localeCompare(difficulty) === 0)
    }));

    return (
        <div>
            {<ButtonGrouping buttons={difficultyButtons} />}
        </div>
    )
};

export default DifficultyButtons;