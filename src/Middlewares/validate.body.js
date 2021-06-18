const validateBody = (req, res, next) => {
  const { title, image, used_technologies, description, github_link } =
    req.body;
  const values = [title, image, used_technologies, description, github_link];
  if (values.some((value) => value.length === 0)) {
    return res
      .status(440)
      .send({ message: "Veuillez remplir tous les champs svp" });
  }
  next();
};

module.exports = validateBody;
