import { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [characterLength, setCharacterLength] = useState(10);

    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [gaugeValue, setGaugeValue] = useState(0);
    const [options, setOptions] = useState({
        includeUppercase: false,
        includeLowerCase: false,
        includeNumbers: false,
        includeSymbols: false,
    });

    return (
        <DataContext.Provider value={{
            characterLength, setCharacterLength,
            generatedPassword, setGeneratedPassword,
            passwordStrength, setPasswordStrength,
            options, setOptions,
            gaugeValue, setGaugeValue
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;