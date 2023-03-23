import { FindByCpfClienteUseCase } from "./FindByCpfClienteUseCase";
import { Request, Response } from "express";

export class FindByCpfClienteController{
    constructor(
        private findByCpfClienteUseCase: FindByCpfClienteUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        const {cpf} = request.params
        try {
            const clientes = await this.findByCpfClienteUseCase.execute(cpf)

            return response.status(200).send(clientes);
        } catch (error) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}