import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ mensage: 'world old on!!' });
});

app.listen(3333, () => {
  console.log('Sever is running!!');
});
