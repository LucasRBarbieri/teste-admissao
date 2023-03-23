import { connection } from "../../../database/connection";
import { Operation } from "../../entities/Operation";
import { IOperationRepo } from "../IOperationRepo";

export class OperationRepo implements IOperationRepo {
  async create(Operation: Operation): Promise<void> {
    try {
      await connection("Operation").insert(Operation);
    } catch (error) {
      console.log(error);
    }
  }

  async findById(operation_id: string): Promise<Operation | undefined> {
    return (
        await connection("Operations")
          .select("*")
          .where("id", operation_id)
          .from<Operation>("Operations")
      ).pop();
  }

  async findByBills(used_bill: number): Promise<Operation[]> {
    return (
        await connection("Operations")
            .select("*")
            .where("used_bill", used_bill)
            .from<Operation>("Operations")
    )
  }

  async findByStatus(status: string): Promise<Operation[]> {
    return (
        await connection("Operations")
            .select("*")
            .where("status", status)
            .from<Operation>("Operations")
    )
  }

  async index(): Promise<Operation[]> {
    return await connection("Operation").select("*").from<Operation>("Operation");
  }

  async updateStatus(operation_id: number, status: string): Promise<void> {
    try {
      await connection("Operation").where("id", operation_id).update({status});
    } catch (error) {
      console.log(error);
    }
  }
}
