import { Router } from "express";
import { listClienteController } from "./useCases/ListCliente";
import { createClienteController } from "./useCases/CreateCliente";
import { updateClienteController } from "./useCases/UpdateCliente";
import { findByCpfClienteController } from "./useCases/FindByCpfCliente";
import { findByNameClienteController } from "./useCases/FindByNameCliente";
import { findByEmailClienteController } from "./useCases/FindByEmailCliente";
import { validateClienteController } from "./useCases/ValidateCliente";

const router = Router();

router.get("/clientes", (request, response) =>
  listClienteController.handle(request, response)
);

router.post("/clientes", (request, response) =>
  createClienteController.handle(request, response)
);

router.put("/clientes", (request, response) =>
  updateClienteController.handle(request, response)
);

router.get("/clientes/cpf/:cpf", (request, response) =>
  findByCpfClienteController.handle(request, response)
);
router.get("/clientes/email/:email", (request, response) =>
  findByEmailClienteController.handle(request, response)
);
router.get("/clientes/name/:name", (request, response) =>
  findByNameClienteController.handle(request, response)
);

router.post("/clientes/exists", (request, response) =>
  validateClienteController.handle(request, response)
);

router.get("/status", (request, response) =>
  response.status(200).send("It's fine. Why? Because I'm here")
);

export { router };
