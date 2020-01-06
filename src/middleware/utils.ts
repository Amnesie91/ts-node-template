import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  fs.appendFile(
    'logfile.txt',
    `url: ${req.url}, method: ${req.method}, date: ${new Date().toString()}\n`,
    () => {
      next();
    }
  );
};

export default loggerMiddleware;
