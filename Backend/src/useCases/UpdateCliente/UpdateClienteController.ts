import { UpdateClienteUseCase } from "./UpdateClienteUseCase";
import { Request, Response } from "express";

export class UpdateHeroController{
    constructor(
        private updateClienteUseCase: UpdateClienteUseCase,
    ){

    }

    async handle(request:Request, response:Response){
        const { cpf, name, phone, email, password, address, birth } = request.body;

        try {
            await this.updateClienteUseCase.execute({
                cpf,
                name,
                phone,
                email,
                password,
                address,
                birth
            })

            return response.status(200).send('User updated successfully');
        } catch (error: any) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}