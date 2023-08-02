import { IClientRepo } from "../../repositories/IClientRepo";
import { IUpdateClienteRequestDTO } from "./UpdateClienteDTO";

export class UpdateClienteUseCase{
    constructor(
        private clienteRepo: IClientRepo
    ){

    }

    async execute(data: IUpdateClienteRequestDTO){
        const clienteExists = await this.clienteRepo.findByCPF(data.cpf);

        if(!clienteExists) throw new Error('Cliente doesn\'t exists.');

        return await this.clienteRepo.update(data);
    }
}