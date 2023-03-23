export class Operation {
  public id: number;
  public value: number;
  public cpf_client: string;
  public id_package: number;
  public status: string;
  public prefered_bill: number;
  public used_bill: number;

  constructor(props: Operation) {
    this.value = props.value;
    this.cpf_client = props.cpf_client;
    this.prefered_bill = props.prefered_bill;
    this.status = "Aberto";
    if (this.prefered_bill){
    this.used_bill = this.prefered_bill;
    } else {
      /*se valor divido pelo valor da nota for >50, ele precisa usar uma nota maior;
      se o valor for =5000, ele é obrigado a usar notas de 100;
      */
    }}
}
