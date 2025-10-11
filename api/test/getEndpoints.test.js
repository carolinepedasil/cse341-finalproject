import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


import request from 'supertest';
import express from 'express';
import countryRoutes from '../src/routes/countryRoutes.js';
import eventRoutes from '../src/routes/eventRoutes.js';
import itineraryRoutes from '../src/routes/itineraryRoutes.js';
import userRoutes from '../src/routes/userRoutes.js';
import connectDB from '../src/config/db.js';
import mongoose from 'mongoose';

import { mockSessionMiddleware, mockAdminMiddleware } from '../__mocks__/sessionMock.js';

// Setup Express app with mocked session
const app = express();
app.use(express.json());
app.use(mockSessionMiddleware);
app.use(mockAdminMiddleware);

app.use('/countries', countryRoutes);
app.use('/events', eventRoutes);
app.use('/itineraries', itineraryRoutes);
app.use('/users', userRoutes);

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /countries', () => {
  it('should return 200 and a list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /countries/:code', () => {
  it('should return 404 for non-existent country', async () => {
    const res = await request(app).get('/countries/ZZZ');
    expect(res.statusCode).toBe(404);
  });
});

describe('GET /events', () => {
  it('should return 200 and a list of events', async () => {
    const res = await request(app).get('/events');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /events/:id', () => {
  it('should return 404 for non-existent event', async () => {
    const res = await request(app).get('/events/507f1f77bcf86cd799439011');
    expect(res.statusCode).toBe(404);
  });
});

describe('GET /itineraries', () => {
  it('should return 200 and a list of itineraries', async () => {
    const res = await request(app).get('/itineraries');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /itineraries/:id', () => {
  it('should return 404 for non-existent itinerary', async () => {
    const res = await request(app).get('/itineraries/507f1f77bcf86cd799439011');
    expect(res.statusCode).toBe(404);
  });
});

describe('GET /users', () => {
  it('should return 200 and a list of users (admin only)', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /users/:id', () => {
  it('should return 404 for non-existent user', async () => {
    const res = await request(app).get('/users/507f1f77bcf86cd799439011');
    expect(res.statusCode).toBe(404);
  });
});
