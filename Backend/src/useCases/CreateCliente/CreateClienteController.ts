import { CreateClienteUseCase } from "./CreateClienteUseCase";
import { Request, Response } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class CreateClienteController {
  constructor(private createClienteUseCase: CreateClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { cpf, name, phone, email, password, address, birth } = request.body;

    try {
      if (!cpf || !name || !phone || !email || !password || !address || !birth) {
        return response.status(400).send('Missing one of the required fields: [cpf, name, phone, email, password, address, birth]');
      }

      if (!cpfValidator.isValid(cpf)){
        return response.status(400).send('Invalid cpf');
      }

      await this.createClienteUseCase.execute({
        cpf,
        name,
        phone,
        email,
        password,
        address,
        birth
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
