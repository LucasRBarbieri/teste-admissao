import { Request, Response, NextFunction } from 'express'

export function handleErrors(error: any, request: Request, response: Response, next: NextFunction) {
  console.error(error)
  return response.status(500).json({ error: error.message || 'Houve um erro' });
}