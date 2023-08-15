import 'express-async-errors';

import { app } from "./app";

app.listen(process.env.PORT || 3333, () => console.log('===SERVER IS RUNNING==='))