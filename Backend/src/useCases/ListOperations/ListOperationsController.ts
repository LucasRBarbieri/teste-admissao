import { ListOperationsUseCase } from "./ListOperationsUseCase";
import { Request, Response } from "express";

export class ListOperationsController{
    constructor(
        private listOperationsUseCase: ListOperationsUseCase,
    ){

    }

    async handle(request: Request, response: Response){
        try {
            const operations = await this.listOperationsUseCase.execute()

            return response.status(200).send(operations);
        } catch (error: any) {
            return response.status(401).json({
                message: error.message || 'Unexpected Error'
            })
        }
    }
}