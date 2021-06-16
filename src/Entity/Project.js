const { db } = require("../../config/database");
class Project {
  constructor(id, title, subtitle, image, description) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.description = description;
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
    db.query("SELECT * FROM project", (err, result) => {
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
    db.query(
      "SELECT * FROM project WHERE id=? LIMIT 1",
      [id],
      (err, result) => {
        if (err) throw err;
        return callback(
          result.find(
            ({ id, title, image, subtitle, description }) =>
              new Project(id, title, image, subtitle, description)
          )
        );
      }
    );
  }
  static insert({ title, image, subtitle, description }, callback) {
    db.query(
      "INSERT INTO project(title, image, subtitle, description)VALUES(?,?,?,?) ",
      [title, image, subtitle, description],
      function (err, result) {
        if (err) throw err;
        return callback("insertion reussi avec success");
      }
    );
  }
  static update() {}
  static delete() {}
}
module.exports = Project;
