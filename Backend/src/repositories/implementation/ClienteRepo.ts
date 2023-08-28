import { connection } from "../../../database/connection";
import { Client } from "../../entities/Client";
import { IClientRepo } from "../IClientRepo";

export class ClienteRepo implements IClientRepo {
  async create(Client: Client): Promise<void> {
    try {
      await connection("clients").insert(Client);
    } catch (error) {
      console.log(error);
    }
  }

  async findByCPF(cpf: string): Promise<Client | undefined> {
    return (
      await connection("clients")
        .select("*")
        .where("cpf", cpf)
        .from<Client>("clients")
    ).pop();
  }

  async index(): Promise<Client[]> {
    return await connection("clients").select("*").from<Client>("clients");
  }

  async findByName(name: string): Promise<Client[]> {
    return await connection("clients")
      .select("*")
      .where("name", name)
      .from<Client>("clients");
  }

  async findByEmail(email: string): Promise<Client[]> {
    return await connection("clients")
      .select("*")
      .where("email", email)
      .from<Client>("clients");
  }

  async update(Client: Client): Promise<void> {
    try {
      await connection("clients").where("cpf", Client.cpf).update(Client);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(cpf: string): Promise<void> {
    try {
      await connection("clients").where("cpf", cpf).delete();
    } catch (error) {
      console.log(error);
    }
  }

  async validatePass(cpf: string, password: string): Promise<boolean> {
    return !!(
      await connection("clients")
        .select("*")
        .where({ cpf, password })
        .from<Client>("clients")
    ).pop();
  }
}
