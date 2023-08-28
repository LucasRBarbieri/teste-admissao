import { Request, Response } from "express";
import { PackageUseCase } from "./PackageUseCase";

export class PackageController{

  constructor(
      private packageUseCase: PackageUseCase
  ){}

  async handle(request: Request, response: Response){
    try {
        const packages = await this.packageUseCase.execute()

        return response.status(200).send(packages);
    } catch (error: any) {
        return response.status(401).json({
            message: error.message || 'Unexpected Error'
        })
    }
  }
}