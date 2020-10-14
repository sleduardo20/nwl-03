import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Buttom from 'components/Buttom';
import mapMarkerImg from '../../assets/map-marker.svg';

import './styles.css';

const SlideBar: React.FC = () => {
  return (
    <aside>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <Buttom icon={FiArrowLeft} color="#fff" to="/map" />
      </footer>
    </aside>
  );
};

export default SlideBar;
