import { Package } from "../entities/Package";

export interface IPackageRepo {
  create(packages: Package): Promise<number>;

  findById(package_id: number): Promise<Package | undefined>;
  findByBills(used_bill: number): Promise<Package[]>;
  findAvailableByBills(used_bill: number, bills_amount: number): Promise<Package | undefined>
  findByStatus(status: string): Promise<Package[]>;
  findByDate(start_date: Date, end_date: Date): Promise<Package[]>;
  index(): Promise<Package[]>;

  updateStatus(package_id: number, status: string): Promise<void>;
  update(packag: Package): Promise<void>;
}
