import { ListClienteUseCase } from "./ListClienteUseCase";
import { Request, Response } from "express";

export class ListClienteController{
    constructor(
        private listClienteUseCase: ListClienteUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        try {
            const clientes = await this.listClienteUseCase.execute()

            return response.status(200).send(clientes);
        } catch (error) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}