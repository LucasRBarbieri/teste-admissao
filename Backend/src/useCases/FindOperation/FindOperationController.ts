import { FindOperationUseCase } from "./FindOperationUseCase";
import { Request, Response } from "express";

export class FindOperationController{
    constructor(
        private findOperationUseCase: FindOperationUseCase,
    ){

    }

    async handle(request: Request, response: Response){
        const {id} = request.params
        try {
            const operation = await this.findOperationUseCase.execute(id)

            return response.status(200).send(operation);
        } catch (error: any) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}