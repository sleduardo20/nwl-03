import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ mensage: 'world old on!!' });
});

app.listen(3333, () => {
  console.log('Sever is running!!');
});
