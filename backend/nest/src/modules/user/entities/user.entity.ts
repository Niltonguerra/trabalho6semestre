import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class User {

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: false, auto: true })
  _id?: mongoose.Types.ObjectId;

  @Prop({ type: String })
  CPF: string;

  @Prop({ type: Date })
  data_nascimento: Date;

  @Prop({ type: String })
  foto: string;

  @Prop({ type: Number })
  avaliacao_como_cliente: Number;

  // @Prop({ type: [String] })
  // tags: string[];

  @Prop({ type: [String] })
  historico_de_viagens: string[];

  @Prop({ type: [String] })
  endereco: string[];

  @Prop({ type: String, required: true })
  tipo_conta: string;

  @Prop({ type: String })
  nome: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  senha: string;

  @Prop({ type: String })
  telefone: string;

  @Prop({ type:Date, required: false })
  criado_em: Date;

  @Prop({ type:Date, required: false })
  modificado_em: Date;

  @Prop({ type: Boolean })
  usuario_ativo: boolean;

  @Prop({ type: Boolean })
  usuario_confirmado: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
