import express from 'express';
import mongoose from 'mongoose';
import router from './routers';
import env from './utils/env';
import publicRouter from './routers/public-router';
const app = express();

const port = 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(publicRouter);
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

mongoose
  .connect(env.DB_URI)
  .then((res) => {
    console.log('Database connection succeeded!');
    return res;
  })
  .catch((error) => {
    console.log({ dbConnectionError: error });
  });
