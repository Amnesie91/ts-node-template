import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

router.route('/').get((req, res, next) => {
  return res.send('ticket page');
});

export default router;
