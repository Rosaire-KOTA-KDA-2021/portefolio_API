const express = require("express");

const ProjectController = require("../src/Controller/ProjectController");
const { validateBody } = require("../src/Middlewares/index");
const { checkIfProjectsExist } = require("../src/Middlewares/index");

const route = express.Router();

route.get(`/`, ProjectController.index);
route.get(`/:id`, checkIfProjectsExist, ProjectController.show);
route.post(`/`, validateBody, ProjectController.create);
route.put(`/:id`, checkIfProjectsExist, ProjectController.update);
route.delete(`/:id`, checkIfProjectsExist, ProjectController.destroy);

module.exports = route;
