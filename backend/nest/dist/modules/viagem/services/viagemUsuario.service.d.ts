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
import { ListarViagemDto } from './../dtos/ListaViagem.dto';
import { Model } from 'mongoose';
import { Viagem } from '../entities/viagem.entity';
import { MensagemRetornoDTO, MensagemSolicitarCaronaDTO } from '../dtos/Mensagens.dto';
import { UsuarioService } from 'src/modules/user/services/user.service';
import { MessageDocument } from 'src/modules/chat/schemas/message.schema';
import { ChatRoomDocument } from 'src/modules/chat/schemas/chatRoom.schema';
export declare class ViagemUsuarioService {
    private viagemModel;
    private readonly usuarioService;
    private messageModel;
    private chatRoomModel;
    constructor(viagemModel: Model<Viagem>, usuarioService: UsuarioService, messageModel: Model<MessageDocument>, chatRoomModel: Model<ChatRoomDocument>);
    listarUmViagem(idViagem: string): Promise<{
        MensagemRetornoDTO: MensagemRetornoDTO;
        ListarViagemDto: ListarViagemDto;
    }>;
    listaTodasAsViagensPorUsuario(idUsuario: string): Promise<{
        MensagemRetornoDTO: MensagemRetornoDTO;
        ListarViagemDto?: ListarViagemDto[];
    }>;
    solicitarViagem(idViagem: string, usuarioId: string): Promise<MensagemSolicitarCaronaDTO>;
    finalizarViagem(idViagem: string): Promise<MensagemRetornoDTO>;
}
