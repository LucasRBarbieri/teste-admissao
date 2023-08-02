import { IClientRepo } from "../../repositories/IClientRepo";

export class DeleteClienteUseCase {
    constructor(
        private clienteRepo: IClientRepo
    ) {

    }

    async execute(cpf: string) {
        return await this.clienteRepo.delete(cpf)
    }
}