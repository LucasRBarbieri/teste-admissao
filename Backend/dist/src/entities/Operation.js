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
exports.Operation = void 0;
const PackageRepo_1 = require("../repositories/implementation/PackageRepo");
const PackageUseCase_1 = require("../useCases/Package/PackageUseCase");
class Operation {
    constructor(props) {
        this.amount = props.amount;
        this.cpf_client = props.cpf_client;
        this.status = "Aberto";
        if (props.prefered_bill) {
            this.used_bill = props.prefered_bill;
        }
        else {
            if (this.amount % 100 === 0 && this.amount / 100 <= 50) {
                this.used_bill = 100;
            }
            else if (this.amount % 50 === 0 && this.amount / 50 <= 50) {
                this.used_bill = 50;
            }
            else if (this.amount % 10 === 0 && this.amount / 10 <= 50) {
                this.used_bill = 10;
            }
            else {
                throw new Error('Invalid value');
            }
        }
    }
    SetIdPackage() {
        return __awaiter(this, void 0, void 0, function* () {
            const packageUseCase = new PackageUseCase_1.PackageUseCase(new PackageRepo_1.PackageRepo());
            let packag = yield packageUseCase.find_available(this);
            if (packag)
                this.id_package = packag.id;
            else {
                packag = yield packageUseCase.create({ amount: this.amount, used_bill: this.used_bill });
                if (packag)
                    this.id_package = packag.id;
            }
            packageUseCase.insert_into(this.id_package, this);
        });
    }
    GetIdPackage() {
        return this.id_package;
    }
}
exports.Operation = Operation;
