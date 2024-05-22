"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    project_name: {
        type: String,
    },
});
const Project = (0, mongoose_1.model)("project", projectSchema);
exports.default = Project;
