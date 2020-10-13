import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, resquest, response, next) => {
  console.error(error);

  return response.status(500).json({ message: 'Interno server error' });
};

export default errorHandler;
