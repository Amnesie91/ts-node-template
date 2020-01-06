import express, { Application } from 'express';
import dotenv from 'dotenv';

import { loggerMiddleware } from './middleware/utils';
import ticketRoutes from './routes/tickets';

const app: Application = express();

// read in our env vars
dotenv.config();

// assign our env vars
const { APPLICATION_NAME, APPLICATION_PORT } = process.env;

// enables json in body
app.use(express.json());

// logging middleware
app.use(loggerMiddleware);

// sample basic route
app.use('/tickets', ticketRoutes);

// runs our application on a predefined port
app.listen(APPLICATION_PORT, () => {
  console.log(`${APPLICATION_NAME} is running on port ${APPLICATION_PORT}...`);
});
