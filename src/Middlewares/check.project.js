const checkIfProjectsExist = (request, response, next) => {
  const project = db.query(
    "SELECT * FROM Project WHERE id_projet =?",
    [request.params.id],
    (err, result) => {
      if (err) throw err;
      if (!project)
        return response.status(404).send("le projet est inexistant");
      request.project = project;
    }
  );

  next();
};
