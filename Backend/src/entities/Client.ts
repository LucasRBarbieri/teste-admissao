export class Client {
  public cpf: string;
  public name: string;
  public address: string;
  public birth: Date;
  public phone: string;
  public email: string;
  public password: string;

  constructor(props: Client) {
    this.cpf = props.cpf;
    this.name = props.name;
    this.phone = props.phone;
    this.address = props.address;
    this.birth = props.birth;
    this.email = props.email;
    this.password = props.password;
  }
}
