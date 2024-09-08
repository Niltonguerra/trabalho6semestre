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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProductForStore = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ServiceProductForStore = class ServiceProductForStore {
    constructor(productModel, storeModel) {
        this.productModel = productModel;
        this.storeModel = storeModel;
    }
    async findStoreWithProducts(storeId) {
        const store = await this.storeModel.findById(storeId).populate('product_id').exec();
        if (!store) {
            throw new common_1.NotFoundException('loja não encontrada');
        }
        const products = await this.productModel.find({ _id: { $in: store.product_id } }).exec();
        return {
            storeId: store._id.toString(),
            storeName: store.nome,
            products: products,
        };
    }
};
exports.ServiceProductForStore = ServiceProductForStore;
exports.ServiceProductForStore = ServiceProductForStore = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __param(1, (0, mongoose_1.InjectModel)('Store')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ServiceProductForStore);
//# sourceMappingURL=productStore.service.js.map