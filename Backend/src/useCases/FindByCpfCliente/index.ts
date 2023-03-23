import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { FindByCpfClienteUseCase } from "./FindByCpfClienteUseCase";
import { FindByCpfClienteController } from "./FindByCpfClienteController";

const clienteRepo = new ClienteRepo();

const findByCpfClienteUseCase = new FindByCpfClienteUseCase(clienteRepo);

const findByCpfClienteController = new FindByCpfClienteController(
  findByCpfClienteUseCase
);

export { findByCpfClienteUseCase, findByCpfClienteController };
