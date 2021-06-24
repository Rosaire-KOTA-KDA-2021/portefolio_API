require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectsRouter = require("../routes/project.routes");

const { db } = require("../config/database");
const app = express();
app.use(express.json());
app.use(cors());

const PORT_PATH = 5000 | process.env.PORT;

db.connect((err) => {
  if (err) console.log("erreur de connexion");

  app.listen(PORT_PATH, () => {
    console.log("Lancer le serveur sur: ", `http://localhost:${PORT_PATH}`);
  });
});

app.get("/", (req, res) => {
  res.redirect(`${process.env.BASE_URI}`);
});

app.use(`${process.env.BASE_URI}`, projectsRouter);
