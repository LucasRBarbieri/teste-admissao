import { FindByEmailClienteUseCase } from "./FindByEmailClienteUseCase";
import { Request, Response } from "express";

export class FindByEmailClienteController {
  constructor(private findByEmailClienteUseCase: FindByEmailClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { email } = request.params;
    try {
      const cliente = await this.findByEmailClienteUseCase.execute(email);

      return response.status(200).send(cliente);
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}
