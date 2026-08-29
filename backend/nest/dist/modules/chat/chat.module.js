"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const message_schema_1 = require("./schemas/message.schema");
const chatRoom_schema_1 = require("./schemas/chatRoom.schema");
const chat_controller_1 = require("./controllers/chat.controller");
const chat_service_1 = require("./services/chat.service");
const user_entity_1 = require("../user/entities/user.entity");
const user_module_1 = require("../user/user.module");
const chat_gateway_1 = require("./services/chat.gateway");
const event_emitter_1 = require("@nestjs/event-emitter");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            event_emitter_1.EventEmitterModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: 'usuario', schema: user_entity_1.UsuarioSchema },
                { name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema },
                { name: chatRoom_schema_1.ChatRoom.name, schema: chatRoom_schema_1.ChatRoomSchema },
            ]),
            user_module_1.UserModule,
        ],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_service_1.ChatService, chat_gateway_1.ChatGateway],
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map