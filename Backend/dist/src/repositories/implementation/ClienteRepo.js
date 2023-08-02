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
exports.ClienteRepo = void 0;
const connection_1 = require("../../../database/connection");
class ClienteRepo {
    create(Client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Client").insert(Client);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findByCPF(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Client")
                .select("*")
                .where("cpf", cpf)
                .from("Client")).pop();
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.connection)("Client").select("*").from("Client");
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.connection)("Client")
                .select("*")
                .where("name", name)
                .from("Client");
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.connection)("Client")
                .select("*")
                .where("email", email)
                .from("Client");
        });
    }
    update(Client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Client").where("cpf", Client.cpf).update(Client);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    validatePass(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return !!(yield (0, connection_1.connection)("Client")
                .select("*")
                .where({ email, password })
                .from("Client")).pop();
        });
    }
}
exports.ClienteRepo = ClienteRepo;
