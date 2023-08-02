import { OperationRepo } from "../repositories/implementation/OperationRepo";
import { PackageRepo } from "../repositories/implementation/PackageRepo";
import { PackageUseCase } from "../useCases/Package/PackageUseCase";

export class Operation {
  public id!: number;
  public amount: number;
  public cpf_client: string;
  private id_package!: number;
  public status: string;
  public prefered_bill!: number;
  public used_bill: number;

  constructor(props: {amount: number, cpf_client: string, prefered_bill?: number}) {
    this.amount = props.amount;
    this.cpf_client = props.cpf_client;
    this.status = "Aberto";
    if (props.prefered_bill){
    this.used_bill = props.prefered_bill;
    } else {
      if(this.amount % 100 === 0 && this.amount / 100 <= 50) {
        this.used_bill = 100;
      }
      else if(this.amount % 50 === 0 && this.amount / 50 <= 50) {
        this.used_bill = 50;
      }
      else if(this.amount % 10 === 0 && this.amount / 10 <= 50) {
        this.used_bill = 10;
      }
      else {
        throw new Error('Invalid value')
      }
    }
  }

    async SetIdPackage() {
      const packageUseCase = new PackageUseCase(new PackageRepo())
      let packag = await packageUseCase.find_available(this)
      if(packag)
        this.id_package = packag.id
      else {
        packag = await packageUseCase.create({ amount: this.amount, used_bill: this.used_bill })
        if(packag) this.id_package = packag.id
      }
      packageUseCase.insert_into(this.id_package, this)
    }

    GetIdPackage(): number | undefined {
      return this.id_package
    }
}
