"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = config_1.PORT || 3000;
        this.env = config_1.NODE_ENV || 'development';
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeStaticFile();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.info(`=================================`);
            console.info(`======= ENV: ${this.env} =======`);
            console.info(`🚀 App listening on the port ${this.port}`);
            console.info(`=================================`);
        });
    }
    initializeStaticFile() {
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '../dist/build'))); // khi có request static file *.js, *.css, *.font, *.jpg....
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
        this.app.get('*', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, '../dist/build', 'index.html'));
        }); // khi có request tới một page của react app
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/api' + route.path, route.router);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map