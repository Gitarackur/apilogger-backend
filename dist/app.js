"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import {} from "./routes/index";
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const protectedRoute = (req, res, next) => {
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
app.use((0, cors_1.default)(corsOptions));
app.use("*", (0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.get("/", (_, res) => {
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
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: "Internal server error, please try again later.",
    });
});
exports.default = app;
