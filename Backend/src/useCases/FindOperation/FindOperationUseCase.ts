import { IOperationRepo } from "../../repositories/IOperationRepo";

export class FindOperationUseCase{
    constructor(
        private operationRepo: IOperationRepo
    ){}

    async execute(id: string){
        return await this.operationRepo.findById(id)
    }
}