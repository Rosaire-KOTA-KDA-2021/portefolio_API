const validateBody = (req, res, next) => {
  const { title, image, subtitle, description } = req.body;
  const values = [title, image, subtitle, description];
  if (values.some((value) => value.length === 0)) {
    return res
      .status(440)
      .send({ message: "Veuillez remplir tous les champs svp" });
  }
  next();
};

module.exports = validateBody;
