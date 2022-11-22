import OptionsPassword from './OptionsPassword';
import PasswordStrength from './PasswordStrength';
import SliderCharacterLength from './SliderCharacterLength';
import iconRightArrow from '../images/icon-arrow-right.svg'
import useData from '../Hooks/useData';
import { generate } from 'generate-password-browser';


const PasswordGenerator = () => {

    const { characterLength,
        setGeneratedPassword,
        options,
        setGaugeValue,
        gaugeValue
    } = useData();
    const { setPasswordStrength } = useData();


    const generatePassword = () => {

        setPasswordStrength(0);
        let i = 0
        for (const option of Object.values(options)) {
            if (option) {
                i++;
                setPasswordStrength(i);
            }
        }

        setGeneratedPassword(generate({
            length: characterLength,
            uppercase: options.includeUppercase,
            lowercase: options.includeLowerCase,
            numbers: options.includeNumbers,
            symbols: options.includeSymbols
        }));

    }


    return (
        <div className='password-generator-container'>
            <SliderCharacterLength />
            <OptionsPassword />
            <PasswordStrength />
            <button className='primary-button' onClick={generatePassword}>
                Generate
                <img src={iconRightArrow} alt=''></img>
            </button>
        </div >
    );
};

export default PasswordGenerator;