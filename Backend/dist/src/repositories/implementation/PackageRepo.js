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
exports.PackageRepo = void 0;
const connection_1 = require("../../../database/connection");
class PackageRepo {
    create(Package) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, connection_1.connection)("Package")
                    .insert(Package)
                    .returning("id")
                    .then(([id]) => { return id; });
            }
            catch (error) {
                throw error;
            }
        });
    }
    findById(Package_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Packages")
                .select("*")
                .where("id", Package_id)
                .from("Packages")).pop();
        });
    }
    findByBills(used_bill) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Packages")
                .select("*")
                .where("used_bill", used_bill)
                .from("Packages"));
        });
    }
    findAvailableByBills(used_bill, bills_amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Packages")
                .select("*")
                .where("used_bill", used_bill)
                .andWhere('status', "Aberto")
                .andWhereBetween("bills_amount", [0, 51 - bills_amount])
                .from("Packages")).pop();
        });
    }
    findByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Packages")
                .select("*")
                .where("status", status)
                .from("Packages"));
        });
    }
    findByDate(start_date, end_date) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield (0, connection_1.connection)("Packages")
                .select("*")
                .whereBetween("created_at", [start_date, end_date])
                .orWhereBetween("closed_at", [start_date, end_date])
                .from("Packages"));
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connection_1.connection)("Package").select("*").from("Package");
        });
    }
    updateStatus(Package_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Package").where("id", Package_id).update({ status });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(packag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.connection)("Package").where("id", packag.id).update(packag);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.PackageRepo = PackageRepo;
