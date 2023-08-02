import { IClientRepo } from "../../repositories/IClientRepo";

export class FindByNameClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(name: string){
        return await this.clienteRepo.findByName(name)
    }
}