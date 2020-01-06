import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

/**
 * basic logger that appens request information into a logfile.txt
 * @structure "method", "url", "date"
 */
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  fs.appendFile(
    'logfile.txt',
    `url: ${req.url}, method: ${req.method}, date: ${new Date().toString()}\n`,
    () => {
      next();
    }
  );
};
