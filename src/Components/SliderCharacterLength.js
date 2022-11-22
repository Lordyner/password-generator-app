import React, { useEffect } from 'react';
import useData from '../Hooks/useData';

const SliderCharacterLength = () => {
    const { characterLength, setCharacterLength } = useData();

    return (
        <div className='password-character-length-container'>
            <div className="password-character-length-header">
                <label htmlFor="passwordLengthSlider">Character length</label>
                <span className='password-length'>{characterLength}</span>
            </div>
            <div className="slider-container">
                <input type="range" id="passwordLengthSlider" name="passwordLength"
                    min="0" max="20" value={characterLength} onChange={(e) => setCharacterLength(e.target.value)} />
            </div>

        </div>
    );
};

export default SliderCharacterLength;