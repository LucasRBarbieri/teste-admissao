import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { FindByEmailClienteUseCase } from "./FindByEmailClienteUseCase";
import { FindByEmailClienteController } from "./FindByEmailClienteController";

const clienteRepo = new ClienteRepo();

const findByEmailClienteUseCase = new FindByEmailClienteUseCase(clienteRepo);

const findByEmailClienteController = new FindByEmailClienteController(
  findByEmailClienteUseCase
);

export { findByEmailClienteUseCase, findByEmailClienteController };
