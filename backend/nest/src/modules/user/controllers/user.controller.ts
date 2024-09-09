import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CriaUsuarioDTO } from '../dtos/CriaUsuario.dto';
import { HashPasswordPipe } from '../pipes/passwordEncryption.pipe';
import { ListaUsuarioPessoalDTO,ListaUsuarioPublicoDTO, ListaUsuarioRetornoDTO} from '../dtos/ListaUsuario.dto';
import { RolesGuardUser } from 'src/modules/user/submodules/auth-user/guards/roles-user.guard';
import { JwtStrategyUser } from 'src/modules/user/submodules/auth-user/strategies/jwt-user.strategy';
import { JwtAuthGuardUser } from 'src/modules/user/submodules/auth-user/guards/jwt-auth-user.guard';
import { DadosUsuarioAtualizarDTO } from '../dtos/DadosUsuarioAtualizar.dto';


@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}


// rotas do frontend e do usuário
  @Get('search/:campo/:valor')
  async findByField( 
    @Param('campo') campo: string, @Param('valor') valor: string,
    @Query('limit') limit: number ): 
    Promise<{ resultado: ListaUsuarioPublicoDTO[]; message: string }>{

      const retorno:ListaUsuarioPublicoDTO[] = await this.service.findByField(campo, valor, limit);

      return {
        resultado: retorno,
        message: 'Busca realizada com sucesso',
      };
  }


  @Get('todos')
  async findAll(): Promise<{ usuario: ListaUsuarioPublicoDTO[]; message: string }> {
    const usuario: ListaUsuarioPublicoDTO[] = await this.service.findAll();
    return {
      usuario,
      message: "todos os usuários encontrados com sucesso!"
    };
  }


  @Post('create')
  @UsePipes(new ValidationPipe(), HashPasswordPipe)
  async create(@Body() user: CriaUsuarioDTO): 
  Promise<{ usuario: ListaUsuarioRetornoDTO; message: string }> {

    const verificaEmail:ListaUsuarioPublicoDTO[] = await this.service.findByField('email', user.email);

    if (verificaEmail.length > 0) {
      throw new Error('Email já cadastrado');
    }

    const retorno:ListaUsuarioRetornoDTO = await this.service.CriarUsuario(user);

    return {
      usuario: retorno,
      message: 'Criado com sucesso!',
    };
  }


// rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('read')
  async findById(@Request() req): Promise<{ usuario: ListaUsuarioPessoalDTO; message: string }> {

    const userId = req.user.userId;

    const usuario: ListaUsuarioPessoalDTO  = await this.service.ListaUmUsuarioDono(userId);

    return {
      usuario,
      message: 'Usuário encontrado com sucesso',
    };
  }

  // rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Put('update')
  async update( @Request() req, @Body() user: DadosUsuarioAtualizarDTO): 
  Promise<{ 
    usuario: ListaUsuarioRetornoDTO; 
    message: string }> {

    const userId = req.user.userId;

    const retorno:ListaUsuarioRetornoDTO = await this.service.AtualizarUsuario(user, userId);

    return {
      usuario: retorno,
      message: 'editado com sucesso!'
    };
  }


  // rota do usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Delete('disable')
  async remove(@Request() req): Promise<{retorno:ListaUsuarioRetornoDTO, message: String }> {

    const userId = req.user.userId;

    const retorno:ListaUsuarioRetornoDTO = await this.service.DesativarUsuario(userId);

    return {
      retorno: retorno,
      message:  "conta desativada com sucesso",
    };
  }

}
