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
const redis_controller_1 = require("./controllers/redis.controller");
const redis_service_1 = require("./services/redis.service");
let RedisModule = class RedisModule {
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        controllers: [redis_controller_1.RedisController],
        providers: [
            {
                provide: 'REDIS_CLIENT',
                useFactory: () => {
                    const redisHost = process.env.REDIS_HOST || 'localhost';
                    const redisPort = parseInt(process.env.REDIS_PORT, 10) || 6379;
                    const redisClient = new ioredis_1.Redis({
                        host: redisHost,
                        port: redisPort,
                    });
                    return redisClient;
                },
            },
            redis_service_1.RedisService,
        ],
        exports: ['REDIS_CLIENT'],
    })
], RedisModule);
//# sourceMappingURL=redis.module.js.map