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
exports.CreateClienteController = void 0;
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
class CreateClienteController {
    constructor(createClienteUseCase) {
        this.createClienteUseCase = createClienteUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, name, phone, email, password, address, birth } = request.body;
            try {
                yield this.createClienteUseCase.execute({
                    cpf,
                    name,
                    phone,
                    email,
                    password,
                    address,
                    birth
                });
                if (!cpf_cnpj_validator_1.cpf.isValid(cpf)) {
                    return response.status(400).send('Invalid cpf');
                }
                return response.status(200).send();
            }
            catch (error) {
                return response.status(401).json({
                    message: error.message || "Unexpected Error",
                });
            }
        });
    }
}
exports.CreateClienteController = CreateClienteController;
