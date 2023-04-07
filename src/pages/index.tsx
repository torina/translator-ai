import { useState } from 'react';
import Translator from '../components/Translator';
import LanguageSelection from '../components/LanguageSelection';
import TopicSelection from '../components/TopicSelection';

export default function Home() {
    const [languages, setLanguages] = useState({ to: '' });
    const [topic, setTopic] = useState('');

    return (
        <div>
            <h1 className={"logo"}>Translator AI</h1>
            <LanguageSelection onLanguageSelected={setLanguages} />
            {/*<TopicSelection onTopicSelected={setTopic} />*/}
            {languages.to && <Translator languages={languages} topic={topic} />}
        </div>
    );
}
