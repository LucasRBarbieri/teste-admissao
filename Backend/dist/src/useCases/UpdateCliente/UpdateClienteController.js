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
exports.UpdateHeroController = void 0;
class UpdateHeroController {
    constructor(updateClienteUseCase) {
        this.updateClienteUseCase = updateClienteUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, name, phone, email, password, address } = request.body;
            try {
                yield this.updateClienteUseCase.execute({
                    cpf,
                    name,
                    phone,
                    email,
                    password,
                    address,
                });
                return response.status(200).send();
            }
            catch (error) {
                return response.status(401).json({
                    message: error.message || 'Unexpected Error'
                });
            }
        });
    }
}
exports.UpdateHeroController = UpdateHeroController;
