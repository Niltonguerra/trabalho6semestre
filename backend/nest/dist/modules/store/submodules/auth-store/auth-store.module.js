"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStoreModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const store_module_1 = require("../../store.module");
const store_service_1 = require("../../services/store.service");
const auth_store_service_1 = require("./services/auth-store.service");
const jwt_store_strategy_1 = require("./strategies/jwt-store.strategy");
const roles_store_guard_1 = require("./guards/roles-store.guard");
const jwt_auth_store_guard_1 = require("./guards/jwt-auth-store.guard");
const auth_store_controller_1 = require("./controllers/auth-store.controller");
const store_entity_1 = require("../../entities/store.entity");
let AuthStoreModule = class AuthStoreModule {
};
exports.AuthStoreModule = AuthStoreModule;
exports.AuthStoreModule = AuthStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Store', schema: store_entity_1.StoreSchema }]),
            store_module_1.StoreModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'FomeFacil',
                signOptions: { expiresIn: '24h' },
            }),
        ],
        controllers: [
            auth_store_controller_1.AuthStoreController,
        ],
        providers: [
            auth_store_service_1.StoreAuthService,
            store_service_1.StoreService,
            jwt_store_strategy_1.JwtStrategyStore,
            roles_store_guard_1.RolesGuardStore,
            jwt_auth_store_guard_1.JwtAuthGuardStore,
        ],
        exports: [
            jwt_store_strategy_1.JwtStrategyStore,
            roles_store_guard_1.RolesGuardStore,
            auth_store_service_1.StoreAuthService,
            jwt_auth_store_guard_1.JwtAuthGuardStore,
        ],
    })
], AuthStoreModule);
//# sourceMappingURL=auth-store.module.js.map