import { IClientRepo } from "../../repositories/IClientRepo";
import { ICreateClienteRequestDTO } from "./CreateClienteDTO";

export class CreateClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(data: ICreateClienteRequestDTO){
        return await this.clienteRepo.create(data);
    }
}