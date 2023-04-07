import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 70%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: 0.4rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const TopicSelection = ({ onTopicSelected }) => {
    return (
        <Container>
            <h2>Topic (optional)</h2>
            <Input placeholder="Enter topic for context" onChange={(e) => onTopicSelected(e.target.value)} />
        </Container>
    );
};

export default TopicSelection;
