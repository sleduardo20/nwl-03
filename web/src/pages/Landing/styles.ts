import { motion } from 'framer-motion';
import styled from 'styled-components';

import imgBg from '../../assets/imgLanding.svg';

export const Container = styled.div`
  background: var(--bg-color);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWapper = styled.div`
  width: min(1100px, 100%);
  height: min(680px, 100%);

  background: url(${imgBg}) no-repeat 80% center;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Main = styled(motion.div)`
  max-width: 380px;

  > h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 7rem;
  }

  > p {
    margin-top: 40px;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const Location = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;
  text-align: right;

  > strong {
    font-weight: 800;
  }
`;
