import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, function () {
  console.log(`Servidor Online! Porta: ${PORT}`);
});
