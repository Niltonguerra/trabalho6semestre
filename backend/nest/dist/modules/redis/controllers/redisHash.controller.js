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
exports.RedisHashController = void 0;
const common_1 = require("@nestjs/common");
const redisHash_service_1 = require("../services/redisHash.service");
let RedisHashController = class RedisHashController {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async setHash(body) {
        await this.redisService.setHash(body.key, body.value, 3600);
        return 'Hash set successfully';
    }
    async updateHashField(body) {
        await this.redisService.updateFieldHash(body.key, body.field, body.value);
        return `Field ${body.field} updated successfully in hash ${body.key}`;
    }
    async getHash(body) {
        return this.redisService.getHash(body.key);
    }
    async deleteValue(body) {
        await this.redisService.deleteValueHash(body.key);
        return 'Value deleted successfully';
    }
};
exports.RedisHashController = RedisHashController;
__decorate([
    (0, common_1.Post)('setHash'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisHashController.prototype, "setHash", null);
__decorate([
    (0, common_1.Patch)('updateHashField'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisHashController.prototype, "updateHashField", null);
__decorate([
    (0, common_1.Get)('getHash'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisHashController.prototype, "getHash", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisHashController.prototype, "deleteValue", null);
exports.RedisHashController = RedisHashController = __decorate([
    (0, common_1.Controller)('redisHash'),
    __metadata("design:paramtypes", [redisHash_service_1.RedisHashService])
], RedisHashController);
//# sourceMappingURL=redisHash.controller.js.map