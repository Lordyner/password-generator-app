import React, { useState } from 'react';
import useData from '../Hooks/useData';
import copyImg from '../images/icon-copy.svg'

const GeneratedPassword = () => {
    const { generatedPassword } = useData();
    const [isCopied, setIsCopied] = useState();

    const copyGeneratedPassword = () => {
        navigator.clipboard.writeText(generatedPassword);
        setIsCopied(true);
        setTimeout(displayCopiedLabel, 2000);

    }

    const displayCopiedLabel = () => {
        setIsCopied(false);
    }
    return (
        <div className='generated-password-container'>
            {generatedPassword ?
                <span className='generated-password'>{generatedPassword}</span> : <span className='password-placeholder'>P4$5W0rD!</span>
            }
            <div className='copy-icon'>
                <span className={`${isCopied ? "show" : "hidden"}`} id='copied-label'>COPIED</span>
                <img src={copyImg} alt='' onClick={copyGeneratedPassword} />
            </div>

        </div>
    );
};

export default GeneratedPassword;