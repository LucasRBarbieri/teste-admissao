import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { UpdateClienteUseCase } from "./UpdateClienteUseCase";
import { UpdateHeroController } from "./UpdateClienteController"

const clienteRepo = new ClienteRepo();

const updateClienteUseCase = new UpdateClienteUseCase(clienteRepo);

const updateClienteController = new UpdateHeroController(updateClienteUseCase);

export { updateClienteUseCase, updateClienteController}
