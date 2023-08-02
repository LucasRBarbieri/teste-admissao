"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const knex_1 = __importDefault(require("knex"));
const configuration = require("../knexfile");
let connection;
exports.connection = connection;
if (process.env.NODE_ENV === "test") {
    exports.connection = connection = (0, knex_1.default)(configuration.test);
}
else {
    exports.connection = connection = (0, knex_1.default)(configuration.development);
}
