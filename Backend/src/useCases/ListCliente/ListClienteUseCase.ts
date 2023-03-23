import { IClienteRepo } from "../../repositories/IClienteRepo";

export class ListClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(){
        return await this.clienteRepo.index()
    }
}