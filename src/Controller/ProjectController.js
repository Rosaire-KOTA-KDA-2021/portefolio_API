const Project = require("../Model/Project");

class ProjectController {
  static index(request, response) {
    Project.findAll((projects) => {
      response.send(projects);
    });
  }

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
  static update(request, response) {
    Project.update(request.params.id, request.body, (message) => {
      response.send(message);
    });
  }
  static destroy(request, response) {
    Project.delete(request.params.id, (message) => {
      response.send(message);
    });
  }
}

module.exports = ProjectController;
