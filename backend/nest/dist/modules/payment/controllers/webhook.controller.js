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
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = require("stripe");
let WebhookController = class WebhookController {
    constructor(configService) {
        this.configService = configService;
        this.stripe = new stripe_1.Stripe(this.configService.get('SECRET_STRIPE_TEST'), { apiVersion: '2024-09-30.acacia', });
        this.endpointSecret = 'whsec_2c082a41841e78880b54e2916323e43fbffaa688e2a80e84092093b9b221c725';
    }
    async handleWebhook(req, res, body) {
        const sig = req.headers['stripe-signature'];
        let event;
        try {
            event = this.stripe.webhooks.constructEvent(body, sig, this.endpointSecret);
        }
        catch (err) {
            console.log(`Webhook error: ${err.message}`);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }
        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object;
            console.log('Pagamento bem-sucedido!', paymentIntent);
        }
        res.status(common_1.HttpStatus.OK).json({ received: true });
    }
};
exports.WebhookController = WebhookController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, Object]),
    __metadata("design:returntype", Promise)
], WebhookController.prototype, "handleWebhook", null);
exports.WebhookController = WebhookController = __decorate([
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WebhookController);
//# sourceMappingURL=webhook.controller.js.map