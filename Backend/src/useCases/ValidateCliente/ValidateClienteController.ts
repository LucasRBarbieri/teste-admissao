import { ValidateClienteUseCase } from "./ValidateClienteUseCase";
import { Request, Response } from "express";
var jwt = require('jsonwebtoken');

export class ValidateClienteController {
  constructor(private validateClienteUseCase: ValidateClienteUseCase) {}

  async handle(request: Request, response: Response) {
    const { cpf, password } = request.body;
    try {
      const valid = await this.validateClienteUseCase.execute({
        cpf,
        password,
      });
      
      if (valid) {
        var token = jwt.sign({ cpf: cpf }, 'senha123');
        return response.status(200).json({token: token });
      }
      else {
        return response.status(401).send();
      }
    } catch (error: any) {
      return response.status(401).json({
        message: error.message || "Unexpected Error",
      });
    }
  }
}

