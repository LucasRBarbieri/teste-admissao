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

        const packag = new Package({ used_bill })
        
        const { id } = await this.packageRepo.create(packag);

        return this.packageRepo.findById(id);
    }

    async insert_into(package_id: number, operation: Operation){
        const packag = await this.packageRepo.findById(package_id)
        const bills_amount = this.calculate_bills_amount(operation)

        if (packag?.used_bill !== operation.used_bill) {
            throw new Error('Invalid bill')
        }

        else if ((packag.bills_amount + bills_amount) > 50) {
            throw new Error('No room for those bills')
        }

        else if ((packag.bills_amount + bills_amount) === 50) {
            packag.status = "Closed";
            packag.closed_at = new Date().toISOString();
        }

        packag.bills_amount += bills_amount;

        await this.packageRepo.update(packag)

        return {msg: 'Insertion succesfull', package_id: packag.id, package_status: packag.status}
    }

    async find_available(operation: Operation) {
        const bills_amount = this.calculate_bills_amount(operation)

        return this.packageRepo.findAvailableByBills(operation.used_bill, bills_amount)
    }

    private calculate_bills_amount ({amount, used_bill}:{amount: number, used_bill: number})
    {
        return amount / used_bill;
    }

    async execute() {
        return await this.packageRepo.index();
    }
}