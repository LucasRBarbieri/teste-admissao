import { connection } from "../../../database/connection";
import { Client } from "../../entities/Client";
import { IClientRepo } from "../IClientRepo";

export class ClienteRepo implements IClientRepo {
  async create(Client: Client): Promise<void> {
    try {
      await connection("Client").insert(Client);
    } catch (error) {
      console.log(error);
    }
  }

  async findByCPF(cpf: string): Promise<Client | undefined> {
    return (
      await connection("Client")
        .select("*")
        .where("cpf", cpf)
        .from<Client>("Client")
    ).pop();
  }

  async index(): Promise<Client[]> {
    return await connection("Client").select("*").from<Client>("Client");
  }

  async findByName(name: string): Promise<Client[]> {
    return await connection("Client")
      .select("*")
      .where("name", name)
      .from<Client>("Client");
  }

  async findByEmail(email: string): Promise<Client[]> {
    return await connection("Client")
      .select("*")
      .where("email", email)
      .from<Client>("Client");
  }

  async update(Client: Client): Promise<void> {
    try {
      await connection("Client").where("cpf", Client.cpf).update(Client);
    } catch (error) {
      console.log(error);
    }
  }

  async validatePass(email: string, password: string): Promise<boolean> {
    return !!(
      await connection("Client")
        .select("*")
        .where({ email, password })
        .from<Client>("Client")
    ).pop();
  }
}
