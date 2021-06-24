"use strict";

var validateBody = require("./validate.body");

var checkIfProjectsExist = require("./check.project");

module.exports = {
  validateBody: validateBody,
  checkIfProjectsExist: checkIfProjectsExist
};