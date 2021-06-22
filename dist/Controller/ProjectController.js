"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Project = require("../Model/Project");

var ProjectController = /*#__PURE__*/function () {
  function ProjectController() {
    _classCallCheck(this, ProjectController);
  }

  _createClass(ProjectController, null, [{
    key: "index",
    value: function index(request, response) {
      Project.findAll(function (projects) {
        response.send(projects);
      });
    }
  }, {
    key: "show",
    value: function show(request, response) {
      Project.findById(request.params.id, function (project) {
        response.send(project);
      });
    }
  }, {
    key: "create",
    value: function create(request, response) {
      Project.insert(request.body, function (message) {
        response.send(message);
      });
    }
  }, {
    key: "update",
    value: function update(request, response) {
      Project.update(request.params.id, request.body, function (message) {
        response.send(message);
      });
    }
  }, {
    key: "destroy",
    value: function destroy(request, response) {
      Project.delete(request.params.id, function (message) {
        response.send(message);
      });
    }
  }]);

  return ProjectController;
}();

module.exports = ProjectController;