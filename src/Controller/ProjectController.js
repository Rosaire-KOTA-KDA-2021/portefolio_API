const ProjectRepository = require("../Repository/ProjectRepository");
const Project = require("../Entity/Project");
class ProjectController {
	static index(request, response) {
		const posts = new ProjectRepository();
		request.send(posts.findAll());
	}
	show(request, response) {}

	create(request, response) {}
	update(request, response) {}
}
