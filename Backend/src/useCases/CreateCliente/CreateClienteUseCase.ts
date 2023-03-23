import { IClienteRepo } from "../../repositories/IClienteRepo";
import { ICreateClienteRequestDTO } from "./CreateClienteDTO";

export class CreateClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(data: ICreateClienteRequestDTO){
        return await this.clienteRepo.create(data);
    }
}