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
exports.AuthUserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("./user.service");
const config_1 = require("@nestjs/config");
const redisSession_service_1 = require("../../redis/services/redisSession.service");
let AuthUserService = class AuthUserService {
    constructor(UsuarioService, jwtService, configService, redisSessionService) {
        this.UsuarioService = UsuarioService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.redisSessionService = redisSessionService;
    }
    async FazerLogin(authUserDTO) {
        const { email, senha } = authUserDTO;
        const validatedUser = await this.validateUser(email, senha);
        if (!validatedUser) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        const token = await this.geraToken(validatedUser);
        await this.redisSessionService.setValueSession(`user_session_${validatedUser._id}`, { token, userId: validatedUser._id }, this.configService.get('USER_SESSION_TIME'));
        return {
            token: token.toString(),
        };
    }
    async validateUser(email, senha) {
        const user = await this.UsuarioService.findByEmail(email);
        const isMatch = bcrypt.compare(senha, user.senha);
        if (user === null || !isMatch) {
            return null;
        }
        return user;
    }
    async geraToken(user) {
        const payload = { email: user.email, id: user._id };
        return this.jwtService.sign(payload, { secret: this.configService.get('SECRET_JWT_SESSION_USER') });
    }
};
exports.AuthUserService = AuthUserService;
exports.AuthUserService = AuthUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsuarioService,
        jwt_1.JwtService,
        config_1.ConfigService,
        redisSession_service_1.RedisSessionService])
], AuthUserService);
//# sourceMappingURL=authUser.service.js.map