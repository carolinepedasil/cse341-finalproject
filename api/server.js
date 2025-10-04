import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

import connectDB from './src/config/db.js';
import countryRoutes from './src/routes/countryRoutes.js';
import eventRoutes from './src/routes/eventRoutes.js';
import itineraryRoutes from './src/routes/itineraryRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

await connectDB();

const require = createRequire(import.meta.url);
const swaggerDoc = require('./src/docs/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, {
  swaggerOptions: {
    tagsSorter: 'alpha',
    operationsSorter: 'method'
  }
}));

app.get('/', (_req, res) => {
  res.json({ ok: true, name: 'World Explorer API', docs: '/api-docs' });
});

app.use('/countries', countryRoutes);
app.use('/events', eventRoutes);
app.use('/itineraries', itineraryRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
