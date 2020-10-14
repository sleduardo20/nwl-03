import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: var(--bg-color);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > h2 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      margin-top: 24px;
      line-height: 2.4rem;
    }

    > footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;

      > strong {
        font-weight: 800;
      }
    }
  }

  button {
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 10;

    &:hover {
      background: var(--blueligth);
    }
  }

  .leaflet-container {
    z-index: 5;
  }
  .map-popup .leaflet-popup-content-wrapper {
    background: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: var(--blue);
    font-size: 2rem;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: var(--blue);
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
