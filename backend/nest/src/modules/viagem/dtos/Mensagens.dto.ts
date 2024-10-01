import mongoose from "mongoose";

export class ListaDadosRetornoDTO {
  nomePrestador?: string;
  idViagem?: mongoose.Types.ObjectId;
}

export class MensagemLoginDTO {
  statusCode: string;
  mensagem: string;
  token: string;
}

export class MensagemRetornoDTO {
  statusCode: number;
  mensagem: string;
  dadosViagem?: ListaDadosRetornoDTO;
}
