import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";
import { ValidateClienteUseCase } from "./ValidateClienteUseCase";
import { ValidateClienteController } from "./ValidateClienteController";

const clienteRepo = new ClienteRepo();

const validateClienteUseCase = new ValidateClienteUseCase(clienteRepo);

const validateClienteController = new ValidateClienteController(
  validateClienteUseCase
);

export { validateClienteUseCase, validateClienteController };
