import React from 'react';
import copyImg from '../images/icon-copy.svg'

const GeneratedPassword = () => {
    return (
        <div className='generated-password-container'>
            <span className='generated-password'>Generated password</span>
            <img src={copyImg} alt='' />
        </div>
    );
};

export default GeneratedPassword;