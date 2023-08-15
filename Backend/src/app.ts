import express from "express";
import cors from 'cors';

import { router } from "./routes";
import { handleErrors } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors);

export { app };
