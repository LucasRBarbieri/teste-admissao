import { CreateOperationUseCase } from './CreateOperationUseCase';
import { Request, Response } from "express";


export class CreateOperationController {
  constructor(private createOperationUseCase: CreateOperationUseCase) {}

  async handle(request: Request, response: Response) {
    const {amount, cpf, prefered_bill} = request.body;

    try {
      if (!amount || !cpf) {
        return response.status(400).send('Missing one of the required fields: [amount, cpf]');
      }

      await this.createOperationUseCase.execute({
        amount,
        cpf,
        prefered_bill
      });

      return response.status(200).send();
    }
    catch (error: any) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}