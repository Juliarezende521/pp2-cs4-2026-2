import { Request, Response, Router } from "express";

import customersRouter from "./customers";

const router = Router();

/* GET home page. */

router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

/* Rotas de clientes */

router.use("/customers", customersRouter);

export default router;