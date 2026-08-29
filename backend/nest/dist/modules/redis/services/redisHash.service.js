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
exports.RedisHashService = void 0;
const ioredis_1 = require("ioredis");
const common_1 = require("@nestjs/common");
let RedisHashService = class RedisHashService {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    async setHash(key, value, ExpirationTime) {
        await this.redisClient.hset(key, value);
        await this.redisClient.expire(key, ExpirationTime);
    }
    async getHash(key) {
        const result = await this.redisClient.hgetall(key);
        return Object.keys(result).length ? result : null;
    }
    async updateFieldHash(key, field, value) {
        await this.redisClient.hset(key, field, value);
    }
    async deleteValueHash(key) {
        await this.redisClient.del(key);
    }
    async existsHash(key) {
        const result = await this.redisClient.exists(key);
        return result === 1;
    }
};
exports.RedisHashService = RedisHashService;
exports.RedisHashService = RedisHashService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.Redis])
], RedisHashService);
//# sourceMappingURL=redisHash.service.js.map