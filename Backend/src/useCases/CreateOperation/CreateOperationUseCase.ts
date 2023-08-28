import { Operation } from "../../entities/Operation";
import { IOperationRepo } from "../../repositories/IOperationRepo";
import { ICreateOperationDTO } from "./CreateOperationDTO"
import { IClientRepo } from "../../repositories/IClientRepo";


export class CreateOperationUseCase{
    constructor(
        private operationRepo: IOperationRepo,
        private clientRepo: IClientRepo
    ){}

    async execute(data: ICreateOperationDTO){
        await this.checkAvailableClient(data.cpf)
        await this.checkAmount(data.amount)
        const operation = new Operation({
            amount: data.amount,
            cpf_client: data.cpf,
            prefered_bill: data.prefered_bill
        })
        await operation.SetIdPackage()
        await this.operationRepo.create(operation)
    }

    async checkAvailableClient (cpf: string) {
        const client = await this.clientRepo.findByCPF(cpf)

        if(!client){
            throw new Error(`Client with ${cpf} not found`)
        }

        return client
    }

    async checkAmount (amount: number) {
        if(amount === 0) {
            throw new Error(`For the operation to be valid, you must enter a value`)
        }else if(amount > 5000){
            throw new Error(`For the operation to be valid, you must enter a max value until 5000`)
        }
    }
}