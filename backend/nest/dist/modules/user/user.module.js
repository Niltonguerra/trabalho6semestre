"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./services/user.service");
const user_controller_1 = require("./controllers/user.controller");
const email_eh_unico_decorator_1 = require("./decorator/email-eh-unico.decorator");
const jwt_1 = require("@nestjs/jwt");
const roles_user_guard_1 = require("./submodules/auth-user/guards/roles-user.guard");
const jwt_auth_user_guard_1 = require("./submodules/auth-user/guards/jwt-auth-user.guard");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_entity_1.UserSchema }]),
        ],
        providers: [
            email_eh_unico_decorator_1.EmailEhUnicoValidator,
            user_service_1.UserService,
            jwt_auth_user_guard_1.JwtAuthGuardUser,
            jwt_1.JwtService,
            roles_user_guard_1.RolesGuardUser
        ],
        controllers: [
            user_controller_1.UserController,
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map