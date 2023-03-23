export class Client {
  public cpf: string;
  public name: string;
  public adress: string;
  public email: string;
  public password: string;

  constructor(props: Client) {
    Object.assign(this, props);
  }
}
