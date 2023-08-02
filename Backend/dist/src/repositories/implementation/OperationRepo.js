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
exports.OperationRepo = void 0;
const connection_1 = require("../../../database/connection");
class OperationRepo {
    create(Operation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Operation").insert(Operation);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findById(operation_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Operations")
                .select("*")
                .where("id", operation_id)
                .from("Operations")).pop();
        });
    }
    findByBills(used_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Operations")
                .select("*")
                .where("used_bill", used_bill)
                .from("Operations"));
        });
    }
    findByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Operations")
                .select("*")
                .where("status", status)
                .from("Operations"));
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.connection)("Operation").select("*").from("Operation");
        });
    }
    updateStatus(operation_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Operation").where("id", operation_id).update({ status });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.OperationRepo = OperationRepo;
