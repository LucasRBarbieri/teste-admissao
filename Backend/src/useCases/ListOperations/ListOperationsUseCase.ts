import { IOperationRepo } from "../../repositories/IOperationRepo";

export class ListOperationsUseCase{
    constructor(
        private operationRepo: IOperationRepo
    ){}

    async execute(){
        return await this.operationRepo.index()
    }
}