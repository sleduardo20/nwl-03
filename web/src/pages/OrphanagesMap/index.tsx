import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';
import face from '../../assets/face.svg';
import Buttom from '../../components/Buttom';

import { Container } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={face} alt="Logo Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estam esperando sua visita.</p>
        </motion.header>
        <motion.footer
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <strong>Blumenau</strong>
          <span>Santa Catarina</span>
        </motion.footer>
      </aside>

      <Map
        center={[-26.8750594, -49.0716105]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Buttom to="/" icon={FiPlus} color="#fff" background="#15c3d6" />
    </Container>
  );
};

export default OrphanagesMap;
