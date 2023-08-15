import { PackageRepo } from "../../repositories/implementation/PackageRepo";
import { PackageUseCase } from "./PackageUseCase";
import { PackageController } from "./PackageController";

const packageRepo = new PackageRepo();

const packageUseCase = new PackageUseCase(packageRepo);

const packageController = new PackageController(packageUseCase);

export { packageUseCase, packageController }
