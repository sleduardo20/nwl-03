import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { MotionProps } from 'framer-motion';

import { Container } from './styles';

type ButtomProps = MotionProps & {
  to: string;
  icon: React.ComponentType<IconBaseProps>;
  background?: string;
  size?: 'normal' | 'medium';
  color?: string;
};

const Buttom: React.FC<ButtomProps> = ({
  children,
  to,
  color,
  background,
  size,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container
      type="button"
      {...rest}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      background={background}
      size={size}
    >
      {children}
      <Link to={to}>{Icon && <Icon size={28} color={color} />}</Link>
    </Container>
  );
};

export default Buttom;
