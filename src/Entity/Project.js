const { db } = require("../../config/database");
class Project {
  constructor(id, title, subtitle, image, description) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.description = description;
    this.sqlQuery = null;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  setImage(image = null) {
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
  getSubTitle() {
    return this.subtitle;
  }
  setSubTitle(subtitle) {
    this.subtitle = subtitle;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }

  static findAll(callback) {
    this.sqlQuery = "SELECT * FROM project";
    db.query(this.sqlQuery, (err, result) => {
      if (err) throw err;
      return callback(
        result.map(
          ({ id, title, image, subtitle, description }) =>
            new Project(id, title, image, subtitle, description)
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
          ({ id, title, image, subtitle, description }) =>
            new Project(id, title, image, subtitle, description)
        )
      );
    });
  }
  static insert({ title, image, subtitle, description }, callback) {
    this.sqlQuery =
      "INSERT INTO project(title, image, subtitle, description)VALUES(?,?,?,?) ";
    db.query(
      this.sqlQuery,
      [title, image, subtitle, description],
      function (err, result) {
        if (err) throw err;
        return callback("l'insertion reussi avec success");
      }
    );
  }
  static update(id, { title, image, subtitle, description }, callback) {
    this.sqlQuery =
      "UPDATE project SET title=?, image=?, subtitle=?, description=? WHERE id = ?";
    db.query(
      this.sqlQuery,
      [title, image, subtitle, description, id],
      (err, result) => {
        if (err) throw err;
        return callback({ id: 1, title, image, subtitle, description });
      }
    );
  }

  static delete(id, callback) {
    this.sqlQuery = "DELETE FROM project WHERE id = ?";
    db.query(this.sqlQuery, [id], (err, res) => {
      if (err) throw err;
      return callback("la suppression reussi avec success");
    });
  }
}
module.exports = Project;
