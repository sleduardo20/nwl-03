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

    > p {
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
`;
