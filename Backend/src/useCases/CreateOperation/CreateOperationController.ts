import { CreateOperationUseCase } from './CreateOperationUseCase';
import { Request, Response } from "express";


export class CreateOperationController {
  constructor(private createOperationUseCase: CreateOperationUseCase) {}

  async handle(request: Request, response: Response) {
    const {amount, cpf, prefered_bill} = request.body;

    if (!amount || !cpf) {
      return response.status(400).send('Missing one of the required fields: [amount, cpf]');
    }

    if (prefered_bill && (prefered_bill !== 10 && prefered_bill !== 50 && prefered_bill !== 100)) {
      return response.status(400).send('Invalid prefered_bill value. Select between: [10, 50, 100]')
    }

    await this.createOperationUseCase.execute({
      amount,
      cpf,
      prefered_bill
    });

    return response.status(200).send('Operation created');
  }
}