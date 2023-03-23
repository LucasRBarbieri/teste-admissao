import { UpdateClienteUseCase } from "./UpdateClienteUseCase";
import { Request, Response } from "express";

export class UpdateHeroController{
    constructor(
        private updateClienteUseCase: UpdateClienteUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        const {cpf, name, phone, email, password} = request.body;

        try {
            await this.updateClienteUseCase.execute({
                cpf,
                name,
                phone,
                email,
                password,
            })

            return response.status(200).send();
        } catch (error) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}