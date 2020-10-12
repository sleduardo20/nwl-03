import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type ButtomProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to: string;
  icon: React.ComponentType<IconBaseProps>;
  background?: string;
  color?: string;
};

const Buttom: React.FC<ButtomProps> = ({
  children,
  to,
  color,
  background,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container type="button" {...rest} background={background}>
      {children}
      <Link to={to}>{Icon && <Icon size={28} color={color} />}</Link>
    </Container>
  );
};

export default Buttom;
