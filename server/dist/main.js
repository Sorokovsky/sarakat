"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv = require("dotenv");
const app_module_1 = require("./app/app.module");
dotenv.config();
const PORT = +process.env.PORT || 3000;
const start = async (port) => {
    const app = await core_1.NestFactory.create(app_module_1.default);
    app.listen(port);
    console.log("Server has been started on port: " + port);
};
start(PORT);
//# sourceMappingURL=main.js.map