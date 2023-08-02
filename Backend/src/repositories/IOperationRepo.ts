import { Operation } from "../entities/Operation";

export interface IOperationRepo {
  create(Operation: Operation): Promise<void>;

  findById(operation_id: string): Promise<Operation | undefined>;
  findByBills(used_bill: number): Promise<Operation[]>;
  findByStatus(status: string): Promise<Operation[]>;
  index(): Promise<Operation[]>;

  updateStatus(operation_id: number, status: string): Promise<void>;
}
