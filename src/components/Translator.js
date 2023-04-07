import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 70%;
  min-height: 150px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding: 1rem;
  border: 0px solid #ccc;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    width: 90%;
  };

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0070f3;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  font-size: 1.2rem;
  //font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 3rem;

  &:hover {
    background-color: #0054ad;
  }
`;

const TranslationArea = styled(TextArea)`
  resize: vertical;
  height: auto;
`;

export default function Translator({ languages, topic }) {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');

    async function handleTranslate() {
        const prompt = `Translate the following text to ${languages.to} with the context of "${topic || 'general'}":\n${text}\nTranslation: `;
        const response = await axios.post('/api/translate', {
            prompt,
            maxTokens: 100
        });

        setTranslation(response.data.result);
    }

    return (
        <Container>
            <Title>Translation</Title>
            <TextArea placeholder="Enter text to translate" value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={handleTranslate}>Translate</Button>
            <Title>Translated text:</Title>
            <TranslationArea readOnly value={translation} />
        </Container>
    );
}
