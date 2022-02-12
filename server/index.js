import express from 'express';
import router from './routers/router.js';
import fileUpload from 'express-fileupload';
import Cors from 'cors';
import { connectDb } from './connection.js';

const PORT = 5000;

const app = express();

app.use(Cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());

app.use('/api', router);

async function startApp() {
  try {
    await connectDb();
    app.listen(PORT, console.log(`server started port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
