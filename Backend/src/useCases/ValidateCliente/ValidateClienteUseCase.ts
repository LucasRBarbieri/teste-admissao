import { IClientRepo } from "../../repositories/IClientRepo";

export class ValidateClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute({ email, password }: {email: string, password: string}){
        return await this.clienteRepo.validatePass(email, password)
    }
}