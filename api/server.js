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
import githubRoutes from './src/routes/github.js';
import accountRoutes from './src/routes/account.js';
import { errorHandler } from './src/middleware/errorHandler.js';

// Oauth
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import session from 'express-session';
import createMemoryStore from 'memorystore';
const MemoryStore = createMemoryStore(session);

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

/* ***********************
 * Oauth setup
 *************************/
// Set up the session and save a cookie named secret (ideally it should be some random letters)
app.use(session({
  cookie: { maxAge: 86400000},
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}))
// Start up passport (which will help with Oauth)
app.use(passport.initialize())
app.use(passport.session())

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile, done) {
  // Use this to store the user into the Db
  //User.findOrCreate({ githubId: profile.id }, function (err, user) {
  return done(null, profile);
  //});
}
))

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});


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
app.use('/github', githubRoutes);
app.use('/account', accountRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
