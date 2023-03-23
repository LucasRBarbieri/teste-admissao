import { IClientRepo } from "../../repositories/IClientRepo";

export class FindByCpfClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(cpf){
        return await this.clienteRepo.findByCPF(cpf)
    }
}