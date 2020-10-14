import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Buttom from 'components/Buttom';
import mapMarkerImg from '../../assets/map-marker.svg';

import './styles.css';

const SlideBar: React.FC = () => {
  return (
    <aside>
      <Link to="/">
        <motion.img
          animate={{
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{ duration: 2 }}
          src={mapMarkerImg}
          alt="Happy"
        />
      </Link>

      <motion.footer>
        <Buttom icon={FiArrowLeft} color="#fff" to="/map" />
      </motion.footer>
    </aside>
  );
};

export default SlideBar;
