import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  select {
    font-size: 1.2rem;
    padding: 0.6rem;
    border: 0.5px solid #ccc;
    border-radius: 0.5rem;
    margin: 0 1rem;
    cursor: pointer;
    background-color: #f8f8f8;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #0070f3;
    }
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  font-size: 1.2rem;
  //font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  

  &:hover {
    background-color: #0054ad;
  }
`;


const LanguageSelection = ({ onLanguageSelected }) => {
    const [to, setTo] = useState('');

    const languages = ['English', 'Spanish', 'French', 'German', 'Italian'];

    useEffect(() => {
        if (to) {
            handleSubmit();
        }
    }, [to]);

    function handleSubmit() {
        if (to) {
            console.log("TO LANGUAGE:: " + to);
            onLanguageSelected({ to });
        }
    }


    return (
        <Container>
            <Title>Destination language</Title>
            <SelectWrapper>
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="">Select language</option>
                    {languages.map((lang) => (
                        <option key={`to-${lang}`} value={lang} >
                            {lang}
                        </option>
                    ))}
                </select>
            </SelectWrapper>
        </Container>
    );
};

export default LanguageSelection;
