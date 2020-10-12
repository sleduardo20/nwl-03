import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Button from '../../components/Buttom';

import { Container, ContentWapper, Main, Location } from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWapper>
        <img src={logoImg} alt="Logo Happy" />
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        <Location>
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </Location>

        <Button to="/map" icon={FiArrowRight} color="rgba(0,0,0,0.6)" />
      </ContentWapper>
    </Container>
  );
};

export default Landing;
