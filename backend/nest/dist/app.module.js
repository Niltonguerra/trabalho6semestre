"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const payment_module_1 = require("./modules/payment/payment.module");
const redis_module_1 = require("./modules/redis/redis.module");
const email_module_1 = require("./modules/email/email.module");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./modules/user/user.module");
const historico_module_1 = require("./modules/historico/historico.module");
const product_module_1 = require("./modules/product/product.module");
const viagem_module_1 = require("./modules/viagem/viagem.module");
const chat_module_1 = require("./modules/chat/chat.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const mongoUri = configService.get(process.env.NODE_ENV === 'production' ? 'MONGO_URI_PROD' : 'MONGO_URI_QA');
                    return {
                        uri: mongoUri,
                    };
                },
            }),
            user_module_1.UserModule,
            payment_module_1.PaymentModule,
            redis_module_1.RedisModule,
            email_module_1.EmailModule,
            historico_module_1.HistoricoModule,
            product_module_1.ProductModule,
            viagem_module_1.ViagemModule,
            chat_module_1.ChatModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
                useFactory: () => new common_1.ValidationPipe({
                    whitelist: true,
                    forbidNonWhitelisted: true,
                    transform: true,
                }),
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map