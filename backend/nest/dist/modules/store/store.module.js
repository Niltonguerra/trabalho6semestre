"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./services/store.service");
const store_controller_1 = require("./controllers/store.controller");
const mongoose_1 = require("@nestjs/mongoose");
const store_entity_1 = require("./entities/store.entity");
const jwt_1 = require("@nestjs/jwt");
const roles_store_guard_1 = require("./submodules/auth-store/guards/roles-store.guard");
const jwt_auth_store_guard_1 = require("./submodules/auth-store/guards/jwt-auth-store.guard");
let StoreModule = class StoreModule {
};
exports.StoreModule = StoreModule;
exports.StoreModule = StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Store', schema: store_entity_1.StoreSchema }])
        ],
        providers: [
            store_service_1.StoreService,
            jwt_1.JwtService,
            roles_store_guard_1.RolesGuardStore,
            jwt_auth_store_guard_1.JwtAuthGuardStore
        ],
        controllers: [
            store_controller_1.StoreController
        ],
    })
], StoreModule);
//# sourceMappingURL=store.module.js.map