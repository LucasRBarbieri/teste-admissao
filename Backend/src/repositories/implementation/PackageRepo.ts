import { connection } from "../../../database/connection";
import { Package } from "../../entities/Package";
import { IPackageRepo } from "../IPackageRepo";

export class PackageRepo implements IPackageRepo {

  async create(Package: Package): Promise<Package> {//number
    try {
      return await connection("packages")
        .insert(Package)
        .returning("id")
        .then(([id]) => { return id });
    } catch (error) {
      throw error;
    }
  }

  async findById(Package_id: number): Promise<Package | undefined> {
    return (
        await connection("packages")
          .select("*")
          .where("id", Package_id)
          .from<Package>("packages")
      ).pop();
  }

  async findByBills(used_bill: number): Promise<Package[]> {
    return (
        await connection("packages")
            .select("*")
            .where("used_bill", used_bill)
            .from<Package>("packages")
    )
  }

  async findAvailableByBills(used_bill: number, bills_amount: number): Promise<Package | undefined> {
    return (
        await connection("packages")
            .select("*")
            .where("used_bill", used_bill)
            .andWhere('status', "Aberto")
            .andWhereBetween("bills_amount", [0, 51-bills_amount])
            .from<Package>("packages")
    ).pop()
  }

  async findByStatus(status: string): Promise<Package[]> {
    return (
        await connection("packages")
            .select("*")
            .where("status", status)
            .from<Package>("packages")
    )
  }
  
  async findByDate(start_date: Date, end_date: Date): Promise<Package[]> {
    return (
        await connection("packages")
          .select("*")
          .whereBetween("created_at", [start_date, end_date])
          .orWhereBetween("closed_at", [start_date, end_date])
          .from<Package>("packages")
    )
  }

  async index(): Promise<Package[]> {
    return await connection("packages").select("*").from<Package>("packages");
  }

  async updateStatus(Package_id: number, status: string): Promise<void> {
    try {
      await connection("packages").where("id", Package_id).update({status});
    } catch (error) {
      console.log(error);
    }
  }

  async update(packag: Package): Promise<void> {
    try {
      await connection("packages").where("id", packag.id).update(packag);
    } catch (error) {
      console.log(error);
    }
  }
}
