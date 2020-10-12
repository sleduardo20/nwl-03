import styled from 'styled-components';

export const Container = styled.button`
  margin: 0;

  border: 0;

  background-color: var(--yellow);
  padding: 4px;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--blueligth);
  }
`;
