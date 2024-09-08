"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./controllers/auth.controller");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../../entities/user.entity");
const authUser_service_1 = require("./services/authUser.service");
const user_module_1 = require("../../user.module");
const user_service_1 = require("../../services/user.service");
const jwt_user_strategy_1 = require("./strategies/jwt-user.strategy");
const roles_user_guard_1 = require("./guards/roles-user.guard");
const jwt_auth_user_guard_1 = require("./guards/jwt-auth-user.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_entity_1.UserSchema }]),
            jwt_1.JwtModule.register({
                secret: 'FomeFacil',
                signOptions: { expiresIn: '24h' },
            }),
            user_module_1.UserModule,
        ],
        controllers: [
            auth_controller_1.AuthController,
        ],
        providers: [
            authUser_service_1.AuthUserService,
            user_service_1.UserService,
            jwt_user_strategy_1.JwtStrategyUser,
            roles_user_guard_1.RolesGuardUser,
            jwt_auth_user_guard_1.JwtAuthGuardUser
        ],
        exports: [
            jwt_user_strategy_1.JwtStrategyUser,
            roles_user_guard_1.RolesGuardUser,
            authUser_service_1.AuthUserService,
            jwt_auth_user_guard_1.JwtAuthGuardUser
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map