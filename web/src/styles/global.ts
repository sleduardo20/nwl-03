import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

button{
  cursor: pointer;
}

body{
  color: #fff;
  background-color: #ebf2f5;
  height: 100vh;
  width: 100vw;
}

html{
  font-size: 62.5%;
}

body,input, button, textarea{
  font: 600 1.8rem Nunito, sans-serif;
  
}

:root{
  --bg-color: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  --blue: #15C3D6;
  --blueligth:#96FEFF;
  --yellow:#FFD666;
  --yellow-dark: #8D734B;
  --white: #ffff;
  --gray: #D3E2E5;
  --green: #37C77F;
  --green-dark: #3EE08F;
  --text-title: #4D6F80;
  --text-components: #8FA7B2;

}
`;
