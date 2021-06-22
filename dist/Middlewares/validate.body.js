"use strict";

var validateBody = function validateBody(req, res, next) {
  var _req$body = req.body,
    title = _req$body.title,
    image = _req$body.image,
    used_technologies = _req$body.used_technologies,
    description = _req$body.description,
    github_link = _req$body.github_link;
  var values = [title, image, used_technologies, description, github_link];

  if (
    values.some(function (value) {
      return value.length === 0;
    })
  ) {
    return res.status(440).send({
      message: "Veuillez remplir tous les champs svp",
    });
  }

  next();
};

module.exports = validateBody;
