import { IPackageConstructorDTO } from "../useCases/Package/PackageDTO";

export class Package {
  public id!: number;
  public created_at: Date;
  public closed_at!: Date;
  public bills_amount: number;
  public status: string;
  public used_bill: number;

  constructor(props: IPackageConstructorDTO) {
    this.used_bill = props.used_bill;
    this.bills_amount = props.bills_amount;
    this.created_at = new Date();
    this.status = "Aberto";
  }
}
