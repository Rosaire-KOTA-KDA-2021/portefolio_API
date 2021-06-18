const { db } = require("../../config/database");
class Project {
  constructor(id, title, image, used_technologies, description, github_link) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.used_technologies = used_technologies;
    this.description = description;
    this.github_link = github_link;
    this.sqlQuery = null;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  setImage(image) {
    this.image = image;
  }
  getImage() {
    return this.image;
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getused_technologies() {
    return this.used_technologies;
  }
  setused_technologies(used_technologies) {
    this.used_technologies = used_technologies;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  getGithub_link() {
    return this.github_link;
  }
  setGithub_link(github_link) {
    this.github_link = github_link;
  }
  static findAll(callback) {
    this.sqlQuery = "SELECT * FROM project";
    db.query(this.sqlQuery, (err, result) => {
      if (err) throw err;
      return callback(
        result.map(
          ({ id, title, image, used_technologies, description, github_link }) =>
            new Project(
              id,
              title,
              image,
              used_technologies,
              description,
              github_link
            )
        )
      );
    });
  }
  static findById(id, callback) {
    this.sqlQuery = "SELECT * FROM project WHERE id=? LIMIT 1";
    db.query(this.sqlQuery, [id], (err, result) => {
      if (err) throw err;
      return callback(
        result.find(
          ({ id, title, image, used_technologies, description, github_link }) =>
            new Project(
              id,
              title,
              image,
              used_technologies,
              description,
              github_link
            )
        )
      );
    });
  }
  static insert(
    { title, image, used_technologies, description, github_link },
    callback
  ) {
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
  }
  static update(
    id,
    { title, image, used_technologies, description, github_link },
    callback
  ) {
    this.sqlQuery =
      "UPDATE project SET title=?, image=?, used_technologies=?, description=?,github_link =? WHERE id = ?";
    db.query(
      this.sqlQuery,
      [title, image, used_technologies, description, github_link, id],
      (err, result) => {
        result = "Mise à jour effectuée avec succèss !";
        if (err) throw err;
        return callback(result);
      }
    );
  }

  static delete(id, callback) {
    this.sqlQuery = "DELETE FROM project WHERE id = ?";
    db.query(this.sqlQuery, [id], (err, result) => {
      if (err) throw err;
      return callback(result + "la suppression reussi avec succèss");
    });
  }
}
module.exports = Project;
