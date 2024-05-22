import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// import {} from "./routes/index";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
	let cookies = req.cookies["session.sid"];

	if (!cookies) {
		return res.status(401).send({
			data: null,
			message: "You must be authorized to access this resource.",
		});
	}

	res.header("Access-Control-Allow-Origin", "http://localhost:5173");
	res.header("Access-Control-Allow-Credentials", "true");

	// @ts-expect-error
	req.user = JSON.parse(cookies);

	next();
};

let corsOptions = {
	origin: "http://localhost:5173",
	credentials: true,
};

app.use(cors(corsOptions));
app.use("*", cors(corsOptions));
app.use(cookieParser());

app.get("/", (_: Request, res: Response) => {
	return res.send({
		message: "Server is healthy",
	});
});

// app.use("/auth", );
// app.use("/payload", );

// Protected route
// app.get("/protected", protectedRoute, (req: CustomRequest, res: Response) => {
// 	// Check if user is logged in
// 	let user = req.user;

// 	return res.send({
// 		message: "Welcome to the protected page!",
// 		data: user,
// 	});
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).send({
		message: "Internal server error, please try again later.",
	});
});

export default app;
