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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const nodemailer = require("nodemailer");
let EmailService = EmailService_1 = class EmailService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new common_1.Logger(EmailService_1.name);
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.get('EMAIL_USER'),
                pass: this.configService.get('EMAIL_PASSWORD'),
            },
        });
    }
    async EnviaVerificacaoEmail(email, url) {
        try {
            const payload = { email: email };
            const token = this.jwtService.sign(payload, { secret: this.configService.get('SECRET_JWT_EMAIL'), expiresIn: '1h' });
            const tituloMensagem = 'Verificação de e-mail do aplicativo MoveSmart';
            const corpoMensagem = `Clique no link a seguir para verificar seu e-mail: http://localhost:3100/${url}?token=${token}`;
            const mailOptions = {
                from: this.configService.get('EMAIL_USER'),
                to: email,
                subject: tituloMensagem,
                text: corpoMensagem,
            };
            this.transporter.sendMail(mailOptions);
            return 200;
        }
        catch (error) {
            this.logger.error(`Erro ao enviar e-mail de verificação: ${error.message}`);
            return 400;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map