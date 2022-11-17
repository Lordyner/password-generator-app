import React from 'react';

const OptionsPassword = () => {
    return (
        <div className='password-options-container'>
            <label className='check-container'>Include Uppercase Letters
                <input type='checkbox' />
                <span className='checkmark'></span>
            </label>
            <label className='check-container'>
                Include Lowercase Letters
                <input type='checkbox'></input>
                <span className='checkmark'></span>
            </label>
            <label className='check-container'>
                Include Numbers
                <input type='checkbox'></input>
                <span className='checkmark'></span>
            </label>
            <label className='check-container'>
                Include Symbols
                <input type='checkbox' id='option-symbol'></input>
                <span className='checkmark'></span>
            </label>
        </div>
    );
};

export default OptionsPassword;