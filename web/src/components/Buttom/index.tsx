import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type ButtomProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to: string;
  icon: React.ComponentType<IconBaseProps>;
  color?: string;
};

const Buttom: React.FC<ButtomProps> = ({
  children,
  to,
  color,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container type="button" {...rest}>
      {children}
      <Link to="/">
        <Icon size={28} color={color} />
      </Link>
    </Container>
  );
};

export default Buttom;
