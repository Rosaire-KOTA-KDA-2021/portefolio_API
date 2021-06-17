const express = require("express");

const ProjectController = require("../src/Controller/ProjectController");
const { validateBody } = require("../src/Middlewares/index");
const { checkIfProjectsExist } = require("../src/Middlewares/index");

const route = express.Router();

route.get(`/`, ProjectController.index);
route.get(`/:id`, ProjectController.show);
route.post(`/`, validateBody, ProjectController.create);
route.put(`/:id`, ProjectController.update);
route.delete(`/:id`, ProjectController.destroy);

module.exports = route;
