import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { DeleteClienteUseCase } from "./DeleteClienteUseCase";
import { DeleteClienteController } from "./DeleteClienteController"

const clienteRepo = new ClienteRepo();

const deleteClienteUseCase = new DeleteClienteUseCase(clienteRepo);

const deleteClienteController = new DeleteClienteController(deleteClienteUseCase);

export { deleteClienteUseCase, deleteClienteController }
