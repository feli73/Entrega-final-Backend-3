import { configDotenv } from 'dotenv';
configDotenv();

import app from './app.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});