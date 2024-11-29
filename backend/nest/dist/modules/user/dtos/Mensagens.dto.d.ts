export declare class ListaUsuarioRetornoDTO {
    nome: string;
    email: string;
}
export declare class MensagemLoginDTO {
    statusCode: string;
    mensagem: string;
    token: string;
}
export declare class MensagemRetornoDTO {
    statusCode: number;
    mensagem: string;
    dadosUsuario?: ListaUsuarioRetornoDTO;
}
