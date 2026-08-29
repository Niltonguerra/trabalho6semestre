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
const jwt_1 = require("@nestjs/jwt");
const rolesUser_guard_1 = require("./Guards/rolesUser.guard");
const jwtAuthUser_guard_1 = require("./Guards/jwtAuthUser.guard");
const authUser_service_1 = require("./services/authUser.service");
const jwtUser_strategy_1 = require("./strategies/jwtUser.strategy");
const auth_controller_1 = require("./controllers/auth.controller");
const email_service_1 = require("../email/services/email.service");
const prestador_service_1 = require("./services/prestador.service");
const veiculo_service_1 = require("./services/veiculo.service");
const prestador_controller_1 = require("./controllers/prestador.controller");
const veiculo_controller_1 = require("./controllers/veiculo.controller");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'usuario', schema: user_entity_1.UsuarioSchema }]),
            jwt_1.JwtModule,
        ],
        providers: [
            user_service_1.UsuarioService,
            authUser_service_1.AuthUserService,
            jwtAuthUser_guard_1.JwtAuthGuardUser,
            jwtUser_strategy_1.JwtStrategyUser,
            rolesUser_guard_1.RolesGuardUser,
            email_service_1.EmailService,
            prestador_service_1.PrestadorService,
            jwt_1.JwtService,
            veiculo_service_1.VeiculoService,
        ],
        controllers: [
            user_controller_1.UserController,
            auth_controller_1.AuthUserController,
            prestador_controller_1.PrestadorController,
            veiculo_controller_1.VeiculoController,
        ],
        exports: [
            user_service_1.UsuarioService,
            jwtAuthUser_guard_1.JwtAuthGuardUser,
            rolesUser_guard_1.RolesGuardUser,
            jwtUser_strategy_1.JwtStrategyUser,
            jwt_1.JwtService,
            user_service_1.UsuarioService,
            veiculo_service_1.VeiculoService,
            prestador_service_1.PrestadorService,
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map