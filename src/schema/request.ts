import { Schema, model } from "mongoose";

const requestSchema = new Schema({
	endpoint: {
		type: String,
	},
});

const Request = model("request", requestSchema);

export default Request;
