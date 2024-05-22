"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const requestSchema = new mongoose_1.Schema({
    endpoint: {
        type: String,
    },
});
const Request = (0, mongoose_1.model)("request", requestSchema);
exports.default = Request;
