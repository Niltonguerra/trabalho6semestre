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
exports.AuthStoreController = void 0;
const common_1 = require("@nestjs/common");
const AuthStore_dto_1 = require("../dtos/AuthStore.dto");
const auth_store_service_1 = require("../services/auth-store.service");
let AuthStoreController = class AuthStoreController {
    constructor(authUserService) {
        this.authUserService = authUserService;
    }
    async loginUser(authUserDTO) {
        return this.authUserService.storeAuthentication(authUserDTO);
    }
};
exports.AuthStoreController = AuthStoreController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthStore_dto_1.AuthStoreDTO]),
    __metadata("design:returntype", Promise)
], AuthStoreController.prototype, "loginUser", null);
exports.AuthStoreController = AuthStoreController = __decorate([
    (0, common_1.Controller)('auth-store'),
    __metadata("design:paramtypes", [auth_store_service_1.StoreAuthService])
], AuthStoreController);
//# sourceMappingURL=auth-store.controller.js.map