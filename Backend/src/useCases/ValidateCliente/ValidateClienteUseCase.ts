import { IClientRepo } from "../../repositories/IClientRepo";

export class ValidateClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute({ cpf, password }: {cpf: string, password: string}){
        return await this.clienteRepo.validatePass(cpf, password)
    }
}