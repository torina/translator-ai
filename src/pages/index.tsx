import { useState } from 'react';
import Translator from '../components/Translator';
import LanguageSelection from '../components/LanguageSelection';

export default function Home() {
    const [languages, setLanguages] = useState({ to: '' });

    return (
        <div>
            <h1 className={"logo"}>Translator AI</h1>
            <LanguageSelection onLanguageSelected={setLanguages} />
            {languages.to && <Translator languages={languages} />}
        </div>
    );
}
