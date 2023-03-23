import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { CreateClienteUseCase } from "./CreateClienteUseCase";
import { CreateClienteController } from "./CreateClienteController"

const clienteRepo = new ClienteRepo();

const createClienteUseCase = new CreateClienteUseCase(clienteRepo);

const createClienteController = new CreateClienteController(createClienteUseCase);

export { createClienteUseCase, createClienteController}
