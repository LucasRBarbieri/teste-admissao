import { IClienteRepo } from "../../repositories/IClienteRepo";

export class ValidateClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute({email, password}){
        return await this.clienteRepo.validatePass(email, password)
    }
}