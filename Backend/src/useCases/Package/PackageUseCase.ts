import { Package } from "../../entities/Package";
import { Operation } from "../../entities/Operation";
import { IPackageRepo } from "../../repositories/IPackageRepo";
import { ICreatePackageDTO } from "./PackageDTO";

export class PackageUseCase{
    constructor(
        private packageRepo: IPackageRepo
    ){

    }

    async create(data: ICreatePackageDTO){
        const {
            used_bill
        } = data;
        const bills_amount = this.calculate_bills_amount(data);

        const packag = new Package({used_bill, bills_amount})
        
        return await this.packageRepo.create(packag);
    }

    async insert_into(package_id: number, operation: Operation){
        const packag = await this.packageRepo.findById(package_id)

        const bills_amount = this.calculate_bills_amount(operation)

        if (packag?.used_bill !== operation.used_bill) {
            return {msg: 'Invalid bill'}
        }

        if ((packag.bills_amount + bills_amount) > 50) {
            return {msg: 'No room for those bills'}
        }

        if((packag.bills_amount + bills_amount) === 50) {
            packag.status = "Fechado"
        }

        packag.bills_amount += bills_amount;

        await this.packageRepo.update(packag)

        return {msg: 'Insertion succesfull', package_id: packag.id, package_status: packag.status}
    }

    async find_available(operation: Operation) {
        const bills_amount = this.calculate_bills_amount(operation)

        return this.packageRepo.findAvailableByBills(operation.used_bill, bills_amount)
    }

    private calculate_bills_amount ({value, used_bill}) {
        return value / used_bill;
    }
}