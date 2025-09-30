import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import connectDB from './src/config/db.js';
import countryRoutes from './src/routes/countryRoutes.js';
import eventRoutes from './src/routes/eventRoutes.js';
import itineraryRoutes from './src/routes/itineraryRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

await connectDB();

app.get('/', (_req, res) => {
  res.json({ ok: true, name: 'World Explorer API' });
});
app.use('/countries', countryRoutes);
app.use('/events', eventRoutes);
app.use('/itineraries', itineraryRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));