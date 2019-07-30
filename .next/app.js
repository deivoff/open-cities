"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_session_1 = __importDefault(require("koa-session"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_static_1 = __importDefault(require("koa-static"));
const mongoose_1 = __importDefault(require("mongoose"));
const ssr_1 = require("./helpers/ssr");
const router_1 = require("./router");
require('dotenv').config({ path: path_1.default.join(`${__dirname}./../.env`) });
exports.createApp = async () => {
    const app = new koa_1.default();
    // Add some assertions required in a production environment
    if (process.env.NODE_ENV === 'production') {
        assert_1.default(process.env.SECRET_KEY, 'Please set SECRET_KEY env variable.');
    }
    app.keys = [process.env.SECRET_KEY || 'SECRET_KEY'];
    await ssr_1.setupSSR(app);
    // Add middleware
    app.use(koa_logger_1.default());
    app.use(koa_bodyparser_1.default());
    app.use(koa_static_1.default(path_1.default.join(__dirname, '..', 'public')));
    app.use(koa_session_1.default({}, app));
    // TODO: Error handling
    // Add routes
    const router = await router_1.createRouter();
    app.use(router.routes());
    // Add database
    try {
        await mongoose_1.default.connect(`${process.env.DB_URL}`, {
            useNewUrlParser: true
        });
        console.log('MongoDB Connected');
    }
    catch (error) {
        console.log(error);
    }
    return app;
};
//# sourceMappingURL=app.js.map