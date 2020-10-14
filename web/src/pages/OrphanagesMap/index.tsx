import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import happyMapIcon from 'utils/mapIcon';

import api from 'services/api';

import face from '../../assets/face.svg';

import Buttom from '../../components/Buttom';

import { Container } from './styles';

interface OrphanagesProps {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanagesProps[]>([]);
  const [positionCurrent, setPositionCurrent] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition => {
        setPositionCurrent({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
      });
    }
  }, [positionCurrent]);

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
        center={[positionCurrent.latitude, positionCurrent.longitude]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={happyMapIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Buttom
        to="/orphanages/create"
        icon={FiPlus}
        color="#fff"
        background="#15c3d6"
        size="medium"
      />
    </Container>
  );
};

export default OrphanagesMap;
