import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

import api from 'services/api';

import happyMapIcon from 'utils/mapIcon';
import SideBar from '../../components/SlideBar';

import './styles.css';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [positionCurrent, setPositionCurrent] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHoursame] = useState('');
  const [opening_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>();
  const [previewimages, setPreviewImages] = useState<string[]>();

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

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      try {
        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('name', name);
        data.append('about', about);
        data.append('instructions', instructions);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(opening_on_weekends));

        images?.forEach(image => {
          data.append('images', image);
        });

        await api.post('/orphanages', data);

        alert('Cadastro realizado com sucesso');

        history.push('/map');
      } catch (error) {
        alert('Ocorreu algum erro no cadastro, tente novamente!');
      }
    },
    [
      history,
      name,
      about,
      instructions,
      opening_hours,
      opening_on_weekends,
      position,
      images,
    ],
  );

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);

      setImages(selectedImages);

      const selectePreviewImages = selectedImages.map(image => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(selectePreviewImages);
    },
    [],
  );

  return (
    <div id="page-create-orphanage">
      <SideBar />

      <main>
        <motion.form
          onSubmit={handleSubmit}
          className="create-orphanage-form"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[positionCurrent.latitude, positionCurrent.longitude]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[
                    positionCurrent.latitude,
                    positionCurrent.longitude,
                  ]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewimages?.map(image => {
                  return <img key={image} src={image} alt={name} />;
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                onChange={event => setOpeningHoursame(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={opening_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  className={!opening_on_weekends ? 'active' : ''}
                  type="button"
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </motion.form>
      </main>
    </div>
  );
};

export default CreateOrphanage;
