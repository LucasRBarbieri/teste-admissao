import { FindByCpfClienteUseCase } from "./FindByCpfClienteUseCase";
import { Request, Response } from "express";
var jwt = require('jsonwebtoken');

export class FindByCpfClienteController{
    constructor(
        private findByCpfClienteUseCase: FindByCpfClienteUseCase,
    ){

    }

    async handle(request: Request, response: Response) {

        const authToken = request.headers.authorization?.split(' ')[1] || null;
    
        try {
          jwt.verify(authToken, 'senha123', async (err: any, decoded: any) => {
            if (err) {
              return response.status(401).json({
                message: err.message || "Unexpected Error",
              });
            } else {
              const cliente = await this.findByCpfClienteUseCase.execute(decoded.cpf);
              return response.status(200).send(cliente);
            }
          });
        } catch (error: any) {
          return response.status(401).json({
            message: error.message || "Unexpected Error",
          });
        }
      }
}