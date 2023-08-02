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
exports.PackageUseCase = void 0;
const Package_1 = require("../../entities/Package");
class PackageUseCase {
    constructor(packageRepo) {
        this.packageRepo = packageRepo;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { used_bill } = data;
            const bills_amount = this.calculate_bills_amount(data);
            const packag = new Package_1.Package({ used_bill, bills_amount });
            const createdPackageId = yield this.packageRepo.create(packag);
            return this.packageRepo.findById(createdPackageId);
        });
    }
    insert_into(package_id, operation) {
        return __awaiter(this, void 0, void 0, function* () {
            const packag = yield this.packageRepo.findById(package_id);
            const bills_amount = this.calculate_bills_amount(operation);
            if ((packag === null || packag === void 0 ? void 0 : packag.used_bill) !== operation.used_bill) {
                return { msg: 'Invalid bill' };
            }
            if ((packag.bills_amount + bills_amount) > 50) {
                return { msg: 'No room for those bills' };
            }
            if ((packag.bills_amount + bills_amount) === 50) {
                packag.status = "Fechado";
            }
            packag.bills_amount += bills_amount;
            yield this.packageRepo.update(packag);
            return { msg: 'Insertion succesfull', package_id: packag.id, package_status: packag.status };
        });
    }
    find_available(operation) {
        return __awaiter(this, void 0, void 0, function* () {
            const bills_amount = this.calculate_bills_amount(operation);
            return this.packageRepo.findAvailableByBills(operation.used_bill, bills_amount);
        });
    }
    calculate_bills_amount({ amount, used_bill }) {
        return amount / used_bill;
    }
}
exports.PackageUseCase = PackageUseCase;
