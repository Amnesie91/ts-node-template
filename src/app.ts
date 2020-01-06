import express, { Request, Response, NextFunction, Application } from 'express';

import loggerMiddleware from './middleware/utils';
import ticketRoutes from './routes/tickets';

const app: Application = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/tickets', ticketRoutes);

app.listen(3000, () => {
  console.log('server is running on port 3000...');
});
