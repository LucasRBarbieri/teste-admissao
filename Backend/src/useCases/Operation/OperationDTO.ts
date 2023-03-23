export interface IOperationDTO{
  id: number;
  cpf: string;
  name: string;
  amount: number;
  id_package: number;
  status: string;
  prefered_bill: number;
  used_bill: number;
}

export interface IOperationConstructorDTO{
  cpf: string;
  amount: number;
}