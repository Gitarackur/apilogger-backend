import app from "./app";
import connectDb from "./config/index";

const PORT = process.env.PORT || 8000;

connectDb((err: Error) => {
	if (err) {
		console.warn("Database error", err.message);
		// process.exit(1);
		return;
	}
	console.log("Connected to database successfully");
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
