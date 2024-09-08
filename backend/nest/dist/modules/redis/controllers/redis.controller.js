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
exports.RedisController = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../services/redis.service");
let RedisController = class RedisController {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async setValue(body) {
        await this.redisService.setValue(body.key, body.value);
        return 'Value set successfully';
    }
    async getValue(key) {
        return this.redisService.getValue(key);
    }
    async deleteValue(key) {
        await this.redisService.deleteValue(key);
        return 'Value deleted successfully';
    }
};
exports.RedisController = RedisController;
__decorate([
    (0, common_1.Post)('set'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "setValue", null);
__decorate([
    (0, common_1.Get)('get'),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "getValue", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RedisController.prototype, "deleteValue", null);
exports.RedisController = RedisController = __decorate([
    (0, common_1.Controller)('redis'),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], RedisController);
//# sourceMappingURL=redis.controller.js.map