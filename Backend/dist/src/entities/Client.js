"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(props) {
        this.cpf = props.cpf;
        this.name = props.name;
        this.address = props.address;
        this.birth = props.birth;
        this.email = props.email;
        this.password = props.password;
    }
}
exports.Client = Client;
