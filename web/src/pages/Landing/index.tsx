import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

import Button from '../../components/Buttom';

import { Container, ContentWapper, Main, Location } from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWapper>
        <motion.img
          src={logoImg}
          alt="Logo Happy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1 }}
        />
        <Main>
          <motion.h1
            initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Leve felicidade para o mundo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 1.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            Visite orfanatos e mude o dia de muitas crianças.
          </motion.p>
        </Main>
        <Location
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </Location>

        <Button
          to="/map"
          icon={FiArrowRight}
          color="rgba(0,0,0,0.6)"
          size="medium"
        />
      </ContentWapper>
    </Container>
  );
};

export default Landing;
