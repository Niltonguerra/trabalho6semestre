"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendacaoModule = void 0;
const common_1 = require("@nestjs/common");
const recomendacao_service_1 = require("./services/recomendacao.service");
const recomendacao_controller_1 = require("./controllers/recomendacao.controller");
const product_service_1 = require("../product/services/product.service");
const store_service_1 = require("../store/services/store.service");
const user_service_1 = require("../user/services/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_entity_1 = require("../product/entities/product.entity");
const store_entity_1 = require("../store/entities/store.entity");
const user_entity_1 = require("../user/entities/user.entity");
const jwt_auth_user_guard_1 = require("../user/submodules/auth-user/guards/jwt-auth-user.guard");
const jwt_1 = require("@nestjs/jwt");
const roles_user_guard_1 = require("../user/submodules/auth-user/guards/roles-user.guard");
let RecomendacaoModule = class RecomendacaoModule {
};
exports.RecomendacaoModule = RecomendacaoModule;
exports.RecomendacaoModule = RecomendacaoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_entity_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Store', schema: store_entity_1.StoreSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_entity_1.UserSchema }]),
        ],
        controllers: [recomendacao_controller_1.RecomendacaoController],
        providers: [
            recomendacao_service_1.RecomendacaoService,
            product_service_1.ProductService,
            store_service_1.StoreService,
            user_service_1.UserService,
            jwt_auth_user_guard_1.JwtAuthGuardUser,
            jwt_1.JwtService,
            roles_user_guard_1.RolesGuardUser
        ],
    })
], RecomendacaoModule);
//# sourceMappingURL=recomendacao.module.js.map