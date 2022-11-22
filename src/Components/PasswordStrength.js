import useData from '../Hooks/useData';

const PasswordStrength = () => {

    const { passwordStrength } = useData();



    return (
        <div className='password-strength-container'>
            <span className='grey-text'>STRENGTH</span>
            <div className='gauge-container'>
                {passwordStrength === 0 ?
                    <>
                        < span className='strength-gauge'></span >
                        < span className='strength-gauge'></span >
                        <span className='strength-gauge'></span>
                        <span className='strength-gauge'></span>
                    </> : ''
                }
                {passwordStrength === 1 ?
                    <>
                        < span className='strength-gauge too-weak-gauge'></span >
                        < span className='strength-gauge'></span >
                        <span className='strength-gauge'></span>
                        <span className='strength-gauge'></span>
                    </> : ''
                }
                {passwordStrength === 2 ?
                    <>
                        <span className='strength-gauge weak-gauge'></span>
                        <span className='strength-gauge weak-gauge'></span>
                        <span className='strength-gauge'></span>
                        <span className='strength-gauge'></span>
                    </> : ''
                }
                {passwordStrength === 3 ?
                    <>
                        <span className='strength-gauge medium-gauge'></span>
                        <span className='strength-gauge medium-gauge'></span>
                        <span className='strength-gauge medium-gauge'></span>
                        <span className='strength-gauge'></span>
                    </> : ''
                }
                {passwordStrength === 4 ?
                    <>
                        <span className='strength-gauge strong-gauge'></span>
                        <span className='strength-gauge strong-gauge'></span>
                        <span className='strength-gauge strong-gauge'></span>
                        <span className='strength-gauge strong-gauge'></span>
                    </> : ''
                }
            </div>

        </div >
    );
};

export default PasswordStrength;