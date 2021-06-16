const Project = require("../Entity/Project");
const { db } = require("../../config/database");
class ProjectController {
  static index = (request, response) => {
    Project.findAll((projects) => {
      response.send(projects);
    });
  };

  static show(request, response) {
    Project.findById(request.params.id, (project) => {
      response.send(project);
    });
  }

  static create(request, response) {
    Project.insert(request.body, (message) => {
      response.send(message);
    });
  }
  static update(request, response) {}
  static delete(request, response) {}
}

module.exports = ProjectController;
