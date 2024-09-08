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
const store_service_1 = require("../store/services/store.service");
const store_entity_1 = require("../store/entities/store.entity");
const productStore_service_1 = require("./services/productStore.service");
const jwt_1 = require("@nestjs/jwt");
const roles_store_guard_1 = require("../store/submodules/auth-store/guards/roles-store.guard");
const jwt_auth_store_guard_1 = require("../store/submodules/auth-store/guards/jwt-auth-store.guard");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Product', schema: product_entity_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Store', schema: store_entity_1.StoreSchema }]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [
            productStore_service_1.ServiceProductForStore,
            product_service_1.ProductService,
            store_service_1.StoreService,
            jwt_1.JwtService,
            roles_store_guard_1.RolesGuardStore,
            jwt_auth_store_guard_1.JwtAuthGuardStore
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map