import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

router.route('/').get((req: Request, res: Response, next: NextFunction) => {
  return res.json({ data: 'ticket page' });
});

export default router;
