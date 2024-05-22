import { Schema, model } from "mongoose";

const projectSchema = new Schema({
	project_name: {
		type: String,
	},
});

const Project = model("project", projectSchema);

export default Project;
