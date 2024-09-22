import { NotFoundException, InternalServerErrorException, Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { ListaUsuarioPessoalDTO,ListaUsuarioPublicoDTO, ListaUsuarioRetornoDTO } from '../dtos/usuario/ListaUsuario.dto';
import { CriaUsuarioDTO } from '../dtos/usuario/CriaUsuario.dto';
import { DadosUsuarioAtualizarDTO } from '../dtos/usuario/DadosUsuarioAtualizar.dto'; 
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginUsuarioInternoDTO } from '../dtos/autenticacao/AuthUser.dto';


@Injectable()
export class UserService {
  
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  private readonly logger = new Logger(UserService.name);

  
  async findByField(campo: string, valor: string, limit?: number):Promise<ListaUsuarioPublicoDTO[]> {
    try{
      let query = {};

      query[campo] = valor;

      let searchQuery = this.userModel.find(query);

      if (limit) {
        searchQuery = searchQuery.limit(limit);
      }

      const data: User[] | null = await searchQuery.exec();

      if(!data) {
        throw new Error('Erro ao buscar o usuário pelo campo informado');
      }

      const retorno: ListaUsuarioPublicoDTO[] = data.map((user: ListaUsuarioPublicoDTO) => {
        return {
          nome: user.nome,
          email: user.email,
          telefone: user.telefone,
          foto: user.foto,
          avaliacao_como_cliente: user.avaliacao_como_cliente,
        };
      });

      return retorno;
    } catch (error) {
      console.error('erro ao tentar encontrar todos os usuários no service:', error);
      throw new Error('Erro ao buscar todos os usuários no service');
    }
  }


  async findByEmail(valor: string): Promise<LoginUsuarioInternoDTO | null> {
    try {
      // Pesquisa pelo email no modelo Mongoose
      const pesquisa: User | null = await this.userModel.findOne({ email: valor }).exec();

      // Verifica se nenhum usuário foi encontrado
      if (!pesquisa) {
        console.error('Usuário não encontrado para o email informado:', valor);
        throw new Error('email incorreto');
      }

      const retorno:LoginUsuarioInternoDTO = {
        _id: pesquisa._id.toString(),
        senha: pesquisa.senha,
        nome: pesquisa.nome,
        email: pesquisa.email
      }

      return retorno; 
      
    } catch (error) {
      console.error('Erro ao tentar encontrar usuário pelo email:', error);
      throw new Error('Erro ao tentar encontrar usuário pelo email');
    }
  }


  async CriarUsuario(user: CriaUsuarioDTO):Promise<ListaUsuarioRetornoDTO> {
  try{

    const newUser:User = {
      CPF: user.CPF,
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      telefone: user.telefone,
      foto: user.foto,
      data_nascimento: user.data_nascimento,
      endereco: user.endereco,
      usuario_ativo: true,
      tipo_conta: 'usuario',
      historico_de_viagens: [],
      avaliacao_como_cliente: 0,
      criado_em: new Date(),      
      modificado_em: new Date(),
      avaliacao_como_prestador: undefined,
      carro: undefined,
      CNH: undefined,
      RG: undefined,
      CRLV: undefined,
      foto_CNH: undefined,
      DPVAT: undefined,
    };




    const data: User | null = await new this.userModel(newUser).save();

    if (!data) {
      console.error('erro ao cadastrar o usuário no service');
      throw new Error('Erro ao cadastrar o usuário, por favor tente mais tarde');
    }

    return {
        nome: data.nome,
        email: data.email,
    };

    } catch (error) {
      console.error('erro cadastrar um novo usuário, erro:', error);
      throw new Error('erro cadastrar um novo usuário');
    }
  }


  async verificaEmail(token: string): Promise<MensagemRetornoDTO> {
    try {
      
      const decoded = this.jwtService.verify(token,{secret: this.configService.get<string>('SECRET_JWT_EMAIL')});
  
     
      if (!decoded || !decoded.email) {
        throw new Error('Token não contém um e-mail válido.');
      }
  
      return {
        mensagem:decoded.email,
        statusCode: 200,
      };
  
    } catch (error) {

      this.logger.error(`Erro na verificação de email: ${error.message}`);

      if (error.name === 'TokenExpiredError') {
        return {
          mensagem: 'Token expirado, solicite um novo',
          statusCode: 401, // Unauthorized
        };
      } 
      return {
        mensagem: 'Token inválido ou expirado',
        statusCode: 400, // Bad Request
      };
    }
  }


  async findAll(): Promise<ListaUsuarioPublicoDTO[]> {
    try {
      const data: User[] | null = await this.userModel.find().exec();
  
      if(!data) {
        console.log('Erro ao buscar todos os usuários no banco de dados')
        throw new Error('Erro ao buscar todos os usuários');
      }

      const retorno: ListaUsuarioPublicoDTO[] = data.map((user: ListaUsuarioPublicoDTO) => {
        return {
          nome: user.nome,
          email: user.email,
          telefone: user.telefone,
          foto: user.foto,
          avaliacao_como_cliente: user.avaliacao_como_cliente,
        };
      });


      return retorno;

    } catch (error) {
      // Log de erro opcional
      console.error('erro ao tentar encontrar todos os usuários no service:', error);
      throw new Error('Erro ao buscar todos os usuários no service');
    }
  }
  


  async ListaUmUsuarioDono(id: string):  Promise <ListaUsuarioPessoalDTO | null> {
    try {
      const user: User | null = await this.userModel.findById(id).exec();
      
      if (!user) {
        throw new Error('Erro, não foi possivel encontrar o usuário pelo id informado');
      }

      const retorno:ListaUsuarioPessoalDTO = {
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        foto: user.foto,
        data_nascimento: user.data_nascimento,
        endereco: user.endereco,
        avaliacao_como_cliente: user.avaliacao_como_cliente,
        historico_de_viagens: [],
        CPF: user.CPF,
        tipo_conta: user.tipo_conta,
      }

      return retorno;

    } catch (error) {
      // Log de erro opcional
      console.error('Error finding user by ID:', error);
      throw new Error('Failed to find user by ID');
    }
  }

  async AtualizarUsuario(user:DadosUsuarioAtualizarDTO, id: string): Promise<ListaUsuarioRetornoDTO> {
    try {
      const updatedUser: User | null = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
      
      if (!updatedUser) {
        throw new NotFoundException('Usuario não encontrado para realizar a atualização');
      }

      const retorno: ListaUsuarioRetornoDTO = {
        nome: updatedUser.nome,
        email: updatedUser.email,
      };

      return retorno;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error na atualização do usuário');
    }
  }


  async DesativarUsuario( id: string): Promise<any> {
    try {

      const user: Partial<User> = {
        usuario_ativo: false,
      };

      const disableUser: User | null = await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();

      if (!disableUser) {
        throw new NotFoundException('Usuario não encontrado para realizar a desativação');
      }

      const retorno: ListaUsuarioRetornoDTO = {
        nome: disableUser.nome,
        email: disableUser.email,
      };
      
      return retorno;

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error na desativação do usuário');
    }
  }

}

