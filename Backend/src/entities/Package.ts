import { IPackageConstructorDTO } from "../useCases/Package/PackageDTO";

export class Package {
  public id!: number;
  public created_at: string;
  public closed_at!: string;
  public bills_amount: number;
  public status: string;
  public used_bill: number;

  constructor(props: IPackageConstructorDTO) {
    this.used_bill = props.used_bill;
    this.bills_amount = 0;
    this.created_at = new Date().toISOString();
    this.status = "Open";
  }
}
