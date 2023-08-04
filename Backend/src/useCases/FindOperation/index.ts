import { OperationRepo } from "../../repositories/implementation/OperationRepo";
import { FindOperationUseCase } from "./FindOperationUseCase";
import { FindOperationController } from "./FindOperationController"

const operationRepo = new OperationRepo();

const findOperationUseCase = new FindOperationUseCase(operationRepo);

const findOperationController = new FindOperationController(findOperationUseCase);

export { findOperationUseCase, findOperationController };