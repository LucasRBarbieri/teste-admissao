import { CreateClienteUseCase } from "./CreateClienteUseCase";
import { Request, Response } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class CreateClienteController {
  constructor(private createClienteUseCase: CreateClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { cpf, name, phone, email, password } = request.body;

    try {
      await this.createClienteUseCase.execute({
        cpf,
        name,
        phone,
        email,
        password,
      });

      if (!cpfValidator.isValid(cpf)){
        return response.status(400).send('Invalid cpf');
      }

      return response.status(200).send();
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}
