/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { Message, MessageDocument } from '../schemas/message.schema';
import { ChatRoom, ChatRoomDocument } from '../schemas/chatRoom.schema';
import { UsuarioDocument } from 'src/modules/user/entities/user.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class ChatService {
    private userModel;
    private messageModel;
    private chatRoomModel;
    private readonly eventEmitter;
    constructor(userModel: Model<UsuarioDocument>, messageModel: Model<MessageDocument>, chatRoomModel: Model<ChatRoomDocument>, eventEmitter: EventEmitter2);
    private validateObjectId;
    createRoom(name: string, participants: string[]): Promise<ChatRoom>;
    sendMessage(sender: string, chatRoom: string, content: string): Promise<Message>;
    getMessages(chatRoomId: string): Promise<Message[]>;
}
