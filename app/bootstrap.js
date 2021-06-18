require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectsRouter = require("../routes/project.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(`${process.env.BASE_URI}`, projectsRouter);

const PORT_PATH = 3400 | process.env.PORT;

app.listen(PORT_PATH, () => {
  console.log("Lancer le serveur sur: ", `http://localhost:${PORT_PATH}`);
});
