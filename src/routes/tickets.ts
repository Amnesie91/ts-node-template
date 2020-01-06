import { Router } from 'express';
import { getSample, postSample } from '../controllers/tickets';

const router: Router = Router();

// define basic route to return some sample json data
router
  .route('/')
  .get(getSample)
  .post(postSample);

export default router;
