import { OperationRepo } from "../../repositories/implementation/OperationRepo";
import { ListOperationsUseCase } from "./ListOperationsUseCase";
import { ListOperationsController } from "./ListOperationsController"

const operationRepo = new OperationRepo();

const listOperationsUseCase = new ListOperationsUseCase(operationRepo);

const listOperationsController = new ListOperationsController(listOperationsUseCase);

export { listOperationsUseCase, listOperationsController };