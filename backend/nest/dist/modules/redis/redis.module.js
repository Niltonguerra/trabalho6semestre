"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const redisHash_controller_1 = require("./controllers/redisHash.controller");
const config_1 = require("@nestjs/config");
const redisHash_service_1 = require("./services/redisHash.service");
const redisSession_service_1 = require("./services/redisSession.service");
const RedisSession_controller_1 = require("./controllers/RedisSession.controller");
let RedisModule = class RedisModule {
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
        ],
        providers: [
            {
                provide: 'REDIS_CLIENT',
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const redisHost = configService.get('REDIS_HOST');
                    const redisPort = configService.get('REDIS_PORT');
                    const redisClient = new ioredis_1.Redis({
                        host: redisHost,
                        port: redisPort,
                    });
                    return redisClient;
                },
            },
            redisHash_service_1.RedisHashService,
            redisSession_service_1.RedisSessionService,
        ],
        controllers: [
            redisHash_controller_1.RedisHashController,
            RedisSession_controller_1.RedisSessionController,
        ],
        exports: ['REDIS_CLIENT', redisSession_service_1.RedisSessionService, redisHash_service_1.RedisHashService],
    })
], RedisModule);
//# sourceMappingURL=redis.module.js.map