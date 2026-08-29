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
exports.RedisSessionController = void 0;
const common_1 = require("@nestjs/common");
const redisSession_service_1 = require("../services/redisSession.service");
let RedisSessionController = class RedisSessionController {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async setSession(body) {
        await this.redisService.setValueSession(body.key, body.value, 3600);
        return 'Session set successfully';
    }
    async getSession(body) {
        return this.redisService.getValueSession(body.key);
    }
    async deleteSession(body) {
        await this.redisService.deleteValueSession(body.key);
        return 'Session deleted successfully';
    }
};
exports.RedisSessionController = RedisSessionController;
__decorate([
    (0, common_1.Post)('setSession'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisSessionController.prototype, "setSession", null);
__decorate([
    (0, common_1.Get)('getSession'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisSessionController.prototype, "getSession", null);
__decorate([
    (0, common_1.Delete)('deleteSession'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedisSessionController.prototype, "deleteSession", null);
exports.RedisSessionController = RedisSessionController = __decorate([
    (0, common_1.Controller)('redisSession'),
    __metadata("design:paramtypes", [redisSession_service_1.RedisSessionService])
], RedisSessionController);
//# sourceMappingURL=RedisSession.controller.js.map