import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { FindByNameClienteUseCase } from "./FindByNameClienteUseCase";
import { FindByNameClienteController } from "./FindByNameClienteController";

const clienteRepo = new ClienteRepo();

const findByNameClienteUseCase = new FindByNameClienteUseCase(clienteRepo);

const findByNameClienteController = new FindByNameClienteController(
  findByNameClienteUseCase
);

export { findByNameClienteUseCase, findByNameClienteController };
