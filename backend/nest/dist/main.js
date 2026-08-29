"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const cors = require("cors");
const body_parser_1 = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'FomeFacil',
        resave: false,
        saveUninitialized: false,
    }));
    app.use('/webhook', (0, body_parser_1.raw)({ type: 'application/json' }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cors());
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    await app.listen(3100, '0.0.0.0');
    console.log(`Application is running on: http://localhost:3100`);
}
bootstrap();
//# sourceMappingURL=main.js.map