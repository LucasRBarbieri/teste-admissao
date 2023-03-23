import { connection } from "../../../database/connection";
import { Package } from "../../entities/Package";
import { IPackageRepo } from "../IPackageRepo";

export class PackageRepo implements IPackageRepo {
  async create(Package: Package): Promise<number> {
    try {
      return await connection("Package")
        .insert(Package)
        .returning("id")
        .then(([id]) => { return id });
    } catch (error) {
      throw error;
    }
  }

  async findById(Package_id: number): Promise<Package | undefined> {
    return (
        await connection("Packages")
          .select("*")
          .where("id", Package_id)
          .from<Package>("Packages")
      ).pop();
  }

  async findByBills(used_bill: number): Promise<Package[]> {
    return (
        await connection("Packages")
            .select("*")
            .where("used_bill", used_bill)
            .from<Package>("Packages")
    )
  }

  async findAvailableByBills(used_bill: number, bills_amount: number): Promise<Package | undefined> {
    return (
        await connection("Packages")
            .select("*")
            .where("used_bill", used_bill)
            .andWhere('status', "Aberto")
            .andWhereBetween("bills_amount", [0, 51-bills_amount])
            .from<Package>("Packages")
    ).pop()
  }

  async findByStatus(status: string): Promise<Package[]> {
    return (
        await connection("Packages")
            .select("*")
            .where("status", status)
            .from<Package>("Packages")
    )
  }
  
  async findByDate(start_date: Date, end_date: Date): Promise<Package[]> {
    return (
        await connection("Packages")
          .select("*")
          .whereBetween("created_at", [start_date, end_date])
          .orWhereBetween("closed_at", [start_date, end_date])
          .from<Package>("Packages")
    )
  }

  async index(): Promise<Package[]> {
    return await connection("Package").select("*").from<Package>("Package");
  }

  async updateStatus(Package_id: number, status: string): Promise<void> {
    try {
      await connection("Package").where("id", Package_id).update({status});
    } catch (error) {
      console.log(error);
    }
  }

  async update(packag: Package): Promise<void> {
    try {
      await connection("Package").where("id", packag.id).update(packag);
    } catch (error) {
      console.log(error);
    }
  }
}
