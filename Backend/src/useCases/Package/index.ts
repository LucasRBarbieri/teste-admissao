import { PackageRepo } from "../../repositories/implementation/PackageRepo";
import { PackageUseCase } from "./PackageUseCase";

const packageRepo = new PackageRepo();

const packageUseCase = new PackageUseCase(packageRepo);

export { packageUseCase }
