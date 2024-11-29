"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViagemModule = void 0;
const common_1 = require("@nestjs/common");
const viagemCRUD_service_1 = require("./services/viagemCRUD.service");
const viagemUsuario_controller_1 = require("./controllers/viagemUsuario.controller");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const viagem_entity_1 = require("./entities/viagem.entity");
const viagemUsuario_service_1 = require("./services/viagemUsuario.service");
const viagemCRUD_controller_1 = require("./controllers/viagemCRUD.controller");
const chat_service_1 = require("../chat/services/chat.service");
const message_schema_1 = require("../chat/schemas/message.schema");
const chatRoom_schema_1 = require("../chat/schemas/chatRoom.schema");
const user_entity_1 = require("../user/entities/user.entity");
let ViagemModule = class ViagemModule {
};
exports.ViagemModule = ViagemModule;
exports.ViagemModule = ViagemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'usuario', schema: user_entity_1.UsuarioSchema },
                { name: 'viagens', schema: viagem_entity_1.ViagemSchema },
                { name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema },
                { name: chatRoom_schema_1.ChatRoom.name, schema: chatRoom_schema_1.ChatRoomSchema },
            ]),
            jwt_1.JwtModule,
            user_module_1.UserModule
        ],
        providers: [
            viagemUsuario_service_1.ViagemUsuarioService,
            viagemCRUD_service_1.ViagemCRUDService,
            chat_service_1.ChatService,
        ],
        controllers: [
            viagemUsuario_controller_1.ViagemUsuarioController,
            viagemCRUD_controller_1.ViagemCRUDController,
        ],
        exports: [
            viagemUsuario_service_1.ViagemUsuarioService,
            viagemCRUD_service_1.ViagemCRUDService,
        ]
    })
], ViagemModule);
//# sourceMappingURL=viagem.module.js.map