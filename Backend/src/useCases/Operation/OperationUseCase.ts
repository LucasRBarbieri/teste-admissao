import { Package } from "../../entities/Package";
import { Operation } from "../../entities/Operation";
import { IOperationRepo } from "../../repositories/IOperationRepo";
import { IOperationDTO } from "../Operation/OperationDTO"
import { IClientRepo } from "../../repositories/IClientRepo";


export class OperationUseCase{
    constructor(
        private operationRepo: IOperationRepo,
        private clientRepo: IClientRepo
    ){

    }

    async createOperation(data: IOperationDTO){
        await this.check_available_client(data.cpf)
    }

    async check_available_client (cpf) {
        const client = await this.clientRepo.findByCPF(cpf)

        if(!client){
            throw new Error(`Client with ${cpf} not found`)
        }

        return client;
    }

    
}