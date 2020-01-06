import { Request, Response } from 'express';

export const getSample = (req: Request, res: Response) => {
  return res.json({ data: 'sample ticket' });
};

export const postSample = (req: Request, res: Response) => {
  return res.json({ data: 'post sample' });
};
