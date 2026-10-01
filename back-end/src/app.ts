import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import carsRouter from "./routes/cars";
import customersRouter from "./routes/customers";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/customers", customersRouter);
app.use("/cars", carsRouter);

export default app;
