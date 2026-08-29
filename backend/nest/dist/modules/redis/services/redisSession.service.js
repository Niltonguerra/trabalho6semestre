"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisSessionService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
let RedisSessionService = class RedisSessionService {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    async setValueSession(key, value, expireInSeconds) {
        const resultado = await this.redisClient.set(key, JSON.stringify(value), 'EX', expireInSeconds);
        if (resultado !== 'OK') {
            throw new common_1.UnauthorizedException('Erro ao armazenar a sessão');
        }
    }
    async getValueSession(key) {
        const result = await this.redisClient.get(key);
        return result ? JSON.parse(result) : null;
    }
    async deleteValueSession(key) {
        const result = await this.redisClient.del(key);
        if (result === 0) {
            throw new common_1.NotFoundException('Chave não encontrada para deleção');
        }
    }
    async existsSession(key) {
        const result = await this.redisClient.exists(key);
        return result === 1;
    }
};
exports.RedisSessionService = RedisSessionService;
exports.RedisSessionService = RedisSessionService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.Redis])
], RedisSessionService);
//# sourceMappingURL=redisSession.service.js.map