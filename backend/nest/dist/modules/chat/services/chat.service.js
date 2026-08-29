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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const message_schema_1 = require("../schemas/message.schema");
const chatRoom_schema_1 = require("../schemas/chatRoom.schema");
const event_emitter_1 = require("@nestjs/event-emitter");
let ChatService = class ChatService {
    constructor(userModel, messageModel, chatRoomModel, eventEmitter) {
        this.userModel = userModel;
        this.messageModel = messageModel;
        this.chatRoomModel = chatRoomModel;
        this.eventEmitter = eventEmitter;
    }
    validateObjectId(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        return new mongoose_2.Types.ObjectId(id);
    }
    async createRoom(name, participants) {
        const room = new this.chatRoomModel({ name, participants });
        return room.save();
    }
    async sendMessage(sender, chatRoom, content) {
        const senderId = this.validateObjectId(sender);
        const chatRoomId = this.validateObjectId(chatRoom);
        const message = new this.messageModel({
            sender: senderId,
            chatRoom: chatRoomId,
            content,
        });
        const savedMessage = await message.save();
        this.eventEmitter.emit('message.created', { chatRoom, message: savedMessage });
        return savedMessage;
    }
    async getMessages(chatRoomId) {
        const roomId = this.validateObjectId(chatRoomId);
        return this.messageModel
            .find({ chatRoom: roomId })
            .populate('sender', '_id name')
            .exec();
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('usuario')),
    __param(1, (0, mongoose_1.InjectModel)(message_schema_1.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(chatRoom_schema_1.ChatRoom.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        event_emitter_1.EventEmitter2])
], ChatService);
//# sourceMappingURL=chat.service.js.map