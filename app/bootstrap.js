require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { db } = require("../config/database");

const app = express();
app.use(express.json());
app.use(cors());

const checkIfProjectsExist = (request, response, next) => {
	const project = db.query("SELECT * FROM Project WHERE id_projet =?", [
		req.params.id,
	], (err, result) => {
			
	});
	next();
};
app.get(`${process.env.BASE_URI}/`, function (req, res) {
	db.query("SELECT * FROM Projet", (err, result) => {
		if (err) {
			return res
				.status(500)
				.send({ error: "le serveur a rencontre un probleme" });
		} else {
			return res.status(200).send(result);
		}
	});
});
app.get(`${process.env.BASE_URI}/:id`, function (req, res) {
	const id = req.params.id;
	return res.send(id);
});

// lancement du Serveur
app.listen(5500, () => {
	console.log("Lancer le serveur sur: ", "http://localhost:5500");
});
