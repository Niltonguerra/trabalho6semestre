"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'FomeFacil',
        resave: false,
        saveUninitialized: false,
    }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cors());
    await app.listen(3100);
}
bootstrap();
//# sourceMappingURL=main.js.map