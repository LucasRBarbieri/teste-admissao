"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationUseCase = void 0;
const Operation_1 = require("../../entities/Operation");
class OperationUseCase {
    constructor(operationRepo, clientRepo) {
        this.operationRepo = operationRepo;
        this.clientRepo = clientRepo;
    }
    createOperation(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkAvailableClient(data.cpf);
            yield this.checkAmount(data.amount);
            const operation = new Operation_1.Operation({
                amount: data.amount,
                cpf_client: data.cpf,
                prefered_bill: data.prefered_bill
            });
            yield operation.SetIdPackage();
            yield this.operationRepo.create(operation);
        });
    }
    checkAvailableClient(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.clientRepo.findByCPF(cpf);
            if (!client) {
                throw new Error(`Client with ${cpf} not found`);
            }
            return client;
        });
    }
    checkAmount(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            if (amount === 0) {
                throw new Error(`For the operation to be valid, you must enter a value`);
            }
            else if (amount > 5000) {
                throw new Error(`For the operation to be valid, you must enter a max value until 5000`);
            }
        });
    }
}
exports.OperationUseCase = OperationUseCase;
