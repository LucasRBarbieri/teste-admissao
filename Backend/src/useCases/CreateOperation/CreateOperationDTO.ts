export interface ICreateOperationDTO{
  cpf: string;
  amount: number;
  prefered_bill: number;
}

export interface IOperationConstructorDTO{
  cpf: string;
  amount: number;
}