import { OperationRepo } from "../../repositories/implementation/OperationRepo";
import { OperationUseCase } from "./OperationUseCase";
import { IClientRepo } from "../../repositories/IClientRepo";
import { ClienteRepo } from "../../repositories/implementation/ClienteRepo";


const operationRepo = new OperationRepo();

const clientRepo = new ClienteRepo();

const operationUseCase = new OperationUseCase(operationRepo, clientRepo);


export { operationUseCase }
