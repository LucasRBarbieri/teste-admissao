import { FindByNameClienteUseCase } from "./FindByNameClienteUseCase";
import { Request, Response } from "express";

export class FindByNameClienteController {
  constructor(private findByNameClienteUseCase: FindByNameClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;
    try {
      const clientes = await this.findByNameClienteUseCase.execute(name);

      return response.status(200).send(clientes);
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}
