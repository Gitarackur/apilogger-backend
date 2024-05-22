import mongoose from "mongoose";

const connectDb = async (cb: Function) => {
	try {
		// TODO remember to use env variables
		await mongoose.connect("mongodb://127.0.0.1:27017/pipeops");

		cb();
	} catch (err: any) {
		cb(err);
	}
};

export default connectDb;
