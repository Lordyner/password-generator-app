import React, { useEffect } from 'react';
import useData from '../Hooks/useData';

const SliderCharacterLength = () => {
    const { characterLength, setCharacterLength } = useData();

    // Not a great practice but couldn't find another way to make it works on Chrome
    // I've tried to set the style on the input in the jsx but as it's a pseudo elemnts it didn't work

    useEffect(() => {
        for (let e of document.querySelectorAll('input[type="range"]')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min === '' ? '0' : e.min);
            e.style.setProperty('--max', e.max === '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
    }, []);

    return (
        <div className='password-character-length-container'>
            <div className="password-character-length-header">
                <label htmlFor="passwordLengthSlider">Character Length</label>
                <span className='password-length'>{characterLength}</span>
            </div>
            <div className="slider-container">
                <input type="range" id="passwordLengthSlider" name="passwordLength"
                    value={characterLength} onChange={(e) => setCharacterLength(e.target.value)}
                    min="0" max="20"
                />
            </div>

        </div>
    );
};

export default SliderCharacterLength;