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
exports.UpdateClienteUseCase = void 0;
class UpdateClienteUseCase {
    constructor(clienteRepo) {
        this.clienteRepo = clienteRepo;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteExists = yield this.clienteRepo.findByCPF(data.cpf);
            if (!clienteExists)
                throw new Error('Cliente doesn\'t exists.');
            return yield this.clienteRepo.update(data);
        });
    }
}
exports.UpdateClienteUseCase = UpdateClienteUseCase;
