"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./services/product.service");
const product_controller_1 = require("./controllers/product.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_entity_1 = require("./entities/product.entity");
const productStore_service_1 = require("./services/productStore.service");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/entities/user.entity");
const prestador_service_1 = require("../user/services/prestador.service");
const rolesUser_guard_1 = require("../user/Guards/rolesUser.guard");
const jwtAuthUser_guard_1 = require("../user/Guards/jwtAuthUser.guard");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_entity_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'usuario', schema: user_entity_1.UsuarioSchema }]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [
            productStore_service_1.ServiceProductForStore,
            product_service_1.ProductService,
            prestador_service_1.PrestadorService,
            jwt_1.JwtService,
            rolesUser_guard_1.RolesGuardUser,
            jwtAuthUser_guard_1.JwtAuthGuardUser,
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map