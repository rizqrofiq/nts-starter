import Express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
export const app = Express();

app.use(bodyParser.json());

app.get("/bre", (req: Request, res: Response) => {
  console.log("dipanggil");
  res.send("Hello");
});
