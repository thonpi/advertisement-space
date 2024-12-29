"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var env = {
    DB_URI: (_a = process.env.DB_URI) !== null && _a !== void 0 ? _a : '',
    JWT_SECRET: (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : '',
    JWT_EXPIRES_IN: parseInt((_c = process.env.JWT_EXPIRES_IN) !== null && _c !== void 0 ? _c : '0'),
};
exports.default = env;
