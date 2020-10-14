import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  background?: string;
  size?: 'normal' | 'medium';
}

const sizeVariations = {
  normal: css`
    width: 48px;
    height: 48px;
  `,
  medium: css`
    width: 68px;
    height: 68px;
  `,
};

export const Container = styled(motion.button)<ContainerProps>`
  margin: 0;
  border: 0;
  padding: 4px;
  border-radius: 16px;

  background-color: ${props =>
    props.background ? props.background : 'var(--yellow)'};

  ${props => sizeVariations[props.size || 'normal']};

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
