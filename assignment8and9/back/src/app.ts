import express, { request, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Origin,X-Requested-With,Accept"
  );

  next();

  //  res.end();
});
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is rocking at ${process.env.PORT}`);
});
