const express = require("express");

const ProjectController = require("../src/Controller/ProjectController");
const { validateBody } = require("../src/Middlewares/index");
const { checkIfProjectsExist } = require("../src/Middlewares/index");

const router = express.Router();

router.get(`/`, ProjectController.index);
router.post(`/`, validateBody, ProjectController.create);
router.get(`/:id`, checkIfProjectsExist, ProjectController.show);
router.put(`/:id`, checkIfProjectsExist, ProjectController.update);
router.delete(`/:id`, checkIfProjectsExist, ProjectController.destroy);

module.exports = router;
