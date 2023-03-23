import { IClienteRepo } from "../../repositories/IClienteRepo";

export class FindByEmailClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(email){
        return await this.clienteRepo.findByEmail(email)
    }
}