"use strict";

var _require = require("../../config/database"),
  db = _require.db;

var checkIfProjectsExist = function checkIfProjectsExist(
  request,
  response,
  next
) {
  db.query(
    "SELECT * FROM project WHERE id=? LIMIT 1",
    [request.params.id],
    function (err, result) {
      if (err) throw err;
      else if (result.length <= 0)
        return response.status(404).send("le projet est inexistant");
      request.project = result;
    }
  );
  next();
};

module.exports = checkIfProjectsExist;
