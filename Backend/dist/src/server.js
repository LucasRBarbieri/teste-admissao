"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
console.log('===ANTES DO LISTEN===');
app_1.app.listen(process.env.PORT || 3333, () => console.log('===SERVER IS RUNNING==='));
