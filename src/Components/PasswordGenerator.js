import React from 'react';
import OptionsPassword from './OptionsPassword';
import PasswordStrength from './PasswordStrength';
import SliderCharacterLength from './SliderCharacterLength';
import iconRightArrow from '../images/icon-arrow-right.svg'


const PasswordGenerator = () => {
    return (
        <div className='password-generator-container'>
            <SliderCharacterLength />
            <OptionsPassword />
            <PasswordStrength />
            <button className='primary-button'>Generate <img src={iconRightArrow} alt='' /></button>
        </div>
    );
};

export default PasswordGenerator;