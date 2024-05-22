"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
const PORT = process.env.PORT || 8000;
(0, index_1.default)((err) => {
    if (err) {
        console.warn("Database error", err.message);
        // process.exit(1);
        return;
    }
    console.log("Connected to database successfully");
});
app_1.default.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
