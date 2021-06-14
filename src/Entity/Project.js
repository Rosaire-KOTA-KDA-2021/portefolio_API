class Project {
	constructor(id, image, title, subtitle, description) {
		this.id = id;
		this.image = image;
		this.title = title;
		this.subtitle = subtitle;
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
}
module.exports = Project;
