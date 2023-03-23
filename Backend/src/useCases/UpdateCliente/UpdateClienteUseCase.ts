import { IClienteRepo } from "../../repositories/IClienteRepo";
import { IUpdateClienteRequestDTO } from "../../UpdateClienteDTO";

export class UpdateClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(data: IUpdateClienteRequestDTO){
        const clienteExists = await this.clienteRepo.findByCPF(data.cpf);

        if(!clienteExists) throw new Error('Cliente doesn\'t exists.');

        return await this.clienteRepo.update(data);
    }
}