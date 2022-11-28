import useData from '../Hooks/useData';

const PasswordStrength = () => {

    const { passwordStrength } = useData();

    return (
        <div className='password-strength-container'>
            <span className='grey-text'>STRENGTH</span>
            <div className='gauge-result-container'>
                {passwordStrength === 0 ?
                    <>
                        <div className='gauge-container'>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                        </div>
                    </> : ''
                }
                {passwordStrength === 1 ?
                    <>
                        <div>
                            <span className='strength-message'>TOO WEAK !</span>
                        </div>
                        <div className='gauge-container'>
                            <span className='strength-gauge too-weak-gauge'></span>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                        </div>
                    </> : ''
                }
                {passwordStrength === 2 ?
                    <>
                        <div>
                            <span className='strength-message'>WEAK</span>
                        </div>
                        <div className='gauge-container'>
                            <span className='strength-gauge weak-gauge'></span>
                            <span className='strength-gauge weak-gauge'></span>
                            <span className='strength-gauge'></span>
                            <span className='strength-gauge'></span>
                        </div>
                    </> : ''
                }
                {passwordStrength === 3 ?
                    <>
                        <div>
                            <span className='strength-message'>MEDIUM</span>
                        </div>
                        <div className='gauge-container'>
                            <span className='strength-gauge medium-gauge'></span>
                            <span className='strength-gauge medium-gauge'></span>
                            <span className='strength-gauge medium-gauge'></span>
                            <span className='strength-gauge'></span>
                        </div>
                    </> : ''
                }
                {passwordStrength === 4 ?
                    <>
                        <div>
                            <span className='strength-message'>STRONG</span>
                        </div>
                        <div className="gauge-container">
                            <span className='strength-gauge strong-gauge'></span>
                            <span className='strength-gauge strong-gauge'></span>
                            <span className='strength-gauge strong-gauge'></span>
                            <span className='strength-gauge strong-gauge'></span>
                        </div>
                    </> : ''
                }
            </div>

        </div >
    );
};

export default PasswordStrength;