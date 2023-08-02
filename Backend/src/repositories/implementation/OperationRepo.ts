import { connection } from "../../../database/connection";
import { Operation } from "../../entities/Operation";
import { IOperationRepo } from "../IOperationRepo";

export class OperationRepo implements IOperationRepo {
  async create(Operation: Operation): Promise<void> {
    try {
      await connection("operations").insert(Operation);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(operation_id: string): Promise<Operation | undefined> {
    return (
        await connection("operations")
          .select("*")
          .where("id", operation_id)
          .from<Operation>("operations")
      ).pop();
  }

  async findByBills(used_bill: number): Promise<Operation[]> {
    return (
        await connection("operations")
            .select("*")
            .where("used_bill", used_bill)
            .from<Operation>("operations")
    )
  }

  async findByStatus(status: string): Promise<Operation[]> {
    return (
        await connection("operations")
            .select("*")
            .where("status", status)
            .from<Operation>("operations")
    )
  }

  async index(): Promise<Operation[]> {
    return await connection("operations").select("*").from<Operation>("operations");
  }

  async updateStatus(operation_id: number, status: string): Promise<void> {
    try {
      await connection("operations").where("id", operation_id).update({status});
    } catch (error) {
      console.log(error);
    }
  }
}
