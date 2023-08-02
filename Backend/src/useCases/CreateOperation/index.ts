import { OperationRepo } from "../../repositories/implementation/OperationRepo";
import { CreateOperationUseCase } from "./CreateOperationUseCase";
import { CreateOperationController } from "./CreateOperationController";
import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";

const operationRepo = new OperationRepo();

const clienteRepo = new ClienteRepo();

const createOperationUseCase = new CreateOperationUseCase(operationRepo, clienteRepo);

const createOperationController = new CreateOperationController(createOperationUseCase);

export { createOperationUseCase, createOperationController };
