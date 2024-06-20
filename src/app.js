import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import productRoutes from './src/routes/product.Routes.js';
import userRoutes from './src/routes/user.Routes.js';

const app = express();

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

export default app;