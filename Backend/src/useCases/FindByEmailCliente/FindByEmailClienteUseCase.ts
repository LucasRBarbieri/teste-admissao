import { IClientRepo } from "../../repositories/IClientRepo";

export class FindByEmailClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(email:string){
        return await this.clienteRepo.findByEmail(email)
    }
}