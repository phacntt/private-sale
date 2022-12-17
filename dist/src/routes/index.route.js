"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_route_1 = __importDefault(require("./user.route"));
const post_route_1 = __importDefault(require("./post.route"));
exports.routes = [
    new user_route_1.default,
    new post_route_1.default
];
//# sourceMappingURL=index.route.js.map