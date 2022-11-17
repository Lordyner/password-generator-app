import React, { useState, useEffect } from 'react';

const SliderCharacterLength = () => {
    const [passwordLength, setPasswordLength] = useState();

    useEffect(() => {
        setPasswordLength(10)
    }, [])

    return (
        <div className='password-character-length-container'>
            <div className="password-character-length-header">
                <label htmlFor="passwordLengthSlider">Character length</label>
                <span className='password-length'>{passwordLength}</span>
            </div>
            <div className="slider-container">
                <input type="range" id="passwordLengthSlider" name="passwordLength"
                    min="0" max="20" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
            </div>

        </div>
    );
};

export default SliderCharacterLength;