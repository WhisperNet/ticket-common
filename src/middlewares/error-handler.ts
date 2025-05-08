import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
  } else {
    console.log('###################');
    console.log(err.name);
    console.log(err.message);
    console.log('###################');
    console.log(err.stack);
    console.log('###################');
    res.status(500).send({
      errors: [{ message: 'Something went wrong', field: err.stack }],
    });
  }
};
