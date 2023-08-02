import { IClientRepo } from "../../repositories/IClientRepo";

export class ListClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(){
        return await this.clienteRepo.index()
    }
}