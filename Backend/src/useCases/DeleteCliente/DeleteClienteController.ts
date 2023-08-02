import { DeleteClienteUseCase } from "./DeleteClienteUseCase";
import { Request, Response } from "express";

export class DeleteClienteController{
    constructor(
        private deleteClienteUseCase: DeleteClienteUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        const {cpf} = request.params;
        try {
            await this.deleteClienteUseCase.execute(cpf)

            response.sendStatus(204)
        } 
        catch (error:any) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}