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
const user_module_1 = require("./modules/user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const product_module_1 = require("./modules/product/product.module");
const store_module_1 = require("./modules/store/store.module");
const core_1 = require("@nestjs/core");
const payment_module_1 = require("./modules/payment/payment.module");
const auth_module_1 = require("./modules/user/submodules/auth-user/auth.module");
const recomendacao_module_1 = require("./modules/recomendacao/recomendacao.module");
const auth_store_module_1 = require("./modules/store/submodules/auth-store/auth-store.module");
const redis_module_1 = require("./modules/redis/redis.module");
const mongoUri = process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_TEST;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://niltondg30:1234567890@cluster0.l1fxv8v.mongodb.net/trab6semestreQA?retryWrites=true&w=majority&appName=Cluster0'),
            user_module_1.UserModule,
            product_module_1.ProductModule,
            store_module_1.StoreModule,
            payment_module_1.PaymentModule,
            auth_module_1.AuthModule,
            recomendacao_module_1.RecomendacaoModule,
            auth_store_module_1.AuthStoreModule,
            redis_module_1.RedisModule,
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