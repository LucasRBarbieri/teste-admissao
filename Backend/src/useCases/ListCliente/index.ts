import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { ListClienteUseCase } from "./ListClienteUseCase";
import { ListClienteController } from "./ListClienteController"

const clienteRepo = new ClienteRepo();

const listClienteUseCase = new ListClienteUseCase(clienteRepo);

const listClienteController = new ListClienteController(listClienteUseCase);

export { listClienteUseCase, listClienteController}
