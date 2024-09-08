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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const store_service_1 = require("../../../services/store.service");
let StoreAuthService = class StoreAuthService {
    constructor(storeService, jwtService) {
        this.storeService = storeService;
        this.jwtService = jwtService;
    }
    async storeAuthentication(authUserDTO) {
        const { email, senha } = authUserDTO;
        const validatedUser = await this.validateStore(email, senha);
        if (!validatedUser) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        return {
            token: (await this.geraToken(validatedUser)).toString()
        };
    }
    async validateStore(email, senha) {
        const user = await this.storeService.findByEmail(email);
        if (user === null) {
            return null;
        }
        const isMatch = await this.validatePassword(senha, user.senha);
        if (!isMatch) {
            return null;
        }
        return user;
    }
    async validatePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
    async geraToken(user) {
        const payload = { email: user.email, id: user._id };
        return this.jwtService.sign(payload);
    }
};
exports.StoreAuthService = StoreAuthService;
exports.StoreAuthService = StoreAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        jwt_1.JwtService])
], StoreAuthService);
//# sourceMappingURL=auth-store.service.js.map