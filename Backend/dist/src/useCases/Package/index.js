"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageUseCase = void 0;
const PackageRepo_1 = require("../../repositories/implementation/PackageRepo");
const PackageUseCase_1 = require("./PackageUseCase");
const packageRepo = new PackageRepo_1.PackageRepo();
const packageUseCase = new PackageUseCase_1.PackageUseCase(packageRepo);
exports.packageUseCase = packageUseCase;
