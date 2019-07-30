"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const PORT = process.env.PORT || 7000;
app_1.createApp()
    .then((app) => http_1.default.createServer(app.callback()).listen(PORT))
    .then(() => console.log(`App listening at port: ${PORT}`))
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map