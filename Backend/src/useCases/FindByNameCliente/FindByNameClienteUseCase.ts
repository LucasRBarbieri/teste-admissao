import { IClienteRepo } from "../../repositories/IClienteRepo";

export class FindByNameClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(name){
        return await this.clienteRepo.findByName(name)
    }
}