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
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg>
            </button>

        </div >
    );
};

export default PasswordGenerator;