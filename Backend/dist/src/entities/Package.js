"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
class Package {
    constructor(props) {
        this.used_bill = props.used_bill;
        this.bills_amount = props.bills_amount;
        this.created_at = new Date();
        this.status = "Aberto";
    }
}
exports.Package = Package;
