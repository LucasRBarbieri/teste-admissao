import { ValidateClienteUseCase } from "./ValidateClienteUseCase";
import { Request, Response } from "express";

export class ValidateClienteController {
  constructor(private validateClienteUseCase: ValidateClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const valid = await this.validateClienteUseCase.execute({
        email,
        password,
      });
      if (valid) return response.status(200).send();
      else return response.status(401).send();
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}
