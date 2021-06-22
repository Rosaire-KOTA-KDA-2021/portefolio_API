"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _require = require("../../config/database"),
  db = _require.db;

var Project = /*#__PURE__*/ (function () {
  function Project(
    id,
    title,
    image,
    used_technologies,
    description,
    github_link
  ) {
    _classCallCheck(this, Project);

    this.id = id;
    this.title = title;
    this.image = image;
    this.used_technologies = used_technologies;
    this.description = description;
    this.github_link = github_link;
    this.sqlQuery = null;
  }

  _createClass(
    Project,
    [
      {
        key: "getId",
        value: function getId() {
          return this.id;
        },
      },
      {
        key: "setId",
        value: function setId(id) {
          this.id = id;
        },
      },
      {
        key: "setImage",
        value: function setImage(image) {
          this.image = image;
        },
      },
      {
        key: "getImage",
        value: function getImage() {
          return this.image;
        },
      },
      {
        key: "getTitle",
        value: function getTitle() {
          return this.title;
        },
      },
      {
        key: "setTitle",
        value: function setTitle(title) {
          this.title = title;
        },
      },
      {
        key: "getused_technologies",
        value: function getused_technologies() {
          return this.used_technologies;
        },
      },
      {
        key: "setused_technologies",
        value: function setused_technologies(used_technologies) {
          this.used_technologies = used_technologies;
        },
      },
      {
        key: "getDescription",
        value: function getDescription() {
          return this.description;
        },
      },
      {
        key: "setDescription",
        value: function setDescription(description) {
          this.description = description;
        },
      },
      {
        key: "getGithub_link",
        value: function getGithub_link() {
          return this.github_link;
        },
      },
      {
        key: "setGithub_link",
        value: function setGithub_link(github_link) {
          this.github_link = github_link;
        },
      },
    ],
    [
      {
        key: "findAll",
        value: function findAll(callback) {
          this.sqlQuery = "SELECT * FROM project";
          db.query(this.sqlQuery, function (err, result) {
            if (err) throw err;
            return callback(
              result.map(function (_ref) {
                var id = _ref.id,
                  title = _ref.title,
                  image = _ref.image,
                  used_technologies = _ref.used_technologies,
                  description = _ref.description,
                  github_link = _ref.github_link;
                return new Project(
                  id,
                  title,
                  image,
                  used_technologies,
                  description,
                  github_link
                );
              })
            );
          });
        },
      },
      {
        key: "findById",
        value: function findById(id, callback) {
          this.sqlQuery = "SELECT * FROM project WHERE id=? LIMIT 1";
          db.query(this.sqlQuery, [id], function (err, result) {
            if (err) throw err;
            return callback(
              result.find(function (_ref2) {
                var id = _ref2.id,
                  title = _ref2.title,
                  image = _ref2.image,
                  used_technologies = _ref2.used_technologies,
                  description = _ref2.description,
                  github_link = _ref2.github_link;
                return new Project(
                  id,
                  title,
                  image,
                  used_technologies,
                  description,
                  github_link
                );
              })
            );
          });
        },
      },
      {
        key: "insert",
        value: function insert(_ref3, callback) {
          var title = _ref3.title,
            image = _ref3.image,
            used_technologies = _ref3.used_technologies,
            description = _ref3.description,
            github_link = _ref3.github_link;
          this.sqlQuery =
            "INSERT INTO project(title, image, used_technologies, description,github_link )VALUES(?,?,?,?,?) ";
          db.query(
            this.sqlQuery,
            [title, image, used_technologies, description, github_link],
            function (err, result) {
              result = "l'insertion reussi avec succèss";
              if (err) throw err;
              return callback(result);
            }
          );
        },
      },
      {
        key: "update",
        value: function update(id, _ref4, callback) {
          var title = _ref4.title,
            image = _ref4.image,
            used_technologies = _ref4.used_technologies,
            description = _ref4.description,
            github_link = _ref4.github_link;
          this.sqlQuery =
            "UPDATE project SET title=?, image=?, used_technologies=?, description=?,github_link =? WHERE id = ?";
          db.query(
            this.sqlQuery,
            [title, image, used_technologies, description, github_link, id],
            function (err, result) {
              result = "Mise à jour effectuée avec succèss !";
              if (err) throw err;
              return callback(result);
            }
          );
        },
      },
      {
        key: "delete",
        value: function _delete(id, callback) {
          this.sqlQuery = "DELETE FROM project WHERE id = ?";
          db.query(this.sqlQuery, [id], function (err, result) {
            if (err) throw err;
            return callback(result + "la suppression reussi avec succèss");
          });
        },
      },
    ]
  );

  return Project;
})();

module.exports = Project;
