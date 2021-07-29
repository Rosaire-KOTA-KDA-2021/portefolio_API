require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectsRouter = require("../routes/project.routes");

const { db } = require("../config/database");
const app = express();
app.use(express.json());
app.use(cors());

const BASE_URI = "/api/projects";
let PORT_PATH = 5000 || process.env.PORT;

db.connect((err) => {
  if (err) {
    console.log("erreur de connexion");
  } else {
    console.log("connexion esimbi");
    app.listen(PORT_PATH, () => {
      console.log("Lancer le serveur sur: ", `http://localhost:${PORT_PATH}`);
    });
  }
});

app.get("/", (req, res) => {
  res.redirect(`${BASE_URI}`);
});

app.use(`${BASE_URI}`, projectsRouter);
