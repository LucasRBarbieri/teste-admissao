import { Client } from "../entities/Client";

export interface IClientRepo {
  findByName(name: string): Promise<Client[]>;
  findByCPF(cpf: string): Promise<Client | undefined>;
  findByEmail(email: string): Promise<Client[]>;
  index(): Promise<Client[]>;

  validatePass(cpf: string, password:string): Promise<boolean>;

  create(cliente: Client): Promise<void>;
  update(cliente: Client): Promise<void>;
  delete(cpf: string): Promise<void>;
}
