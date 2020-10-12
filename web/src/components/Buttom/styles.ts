import styled from 'styled-components';

interface ContainerProps {
  background?: string;
}

export const Container = styled.button<ContainerProps>`
  margin: 0;

  border: 0;

  background-color: ${props =>
    props.background ? props.background : 'var(--yellow)'};
  padding: 4px;
  width: 80px;
  height: 80px;
  border-radius: 30px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 8px;
  }

  &:hover {
    background-color: var(--blueligth);
  }
`;
