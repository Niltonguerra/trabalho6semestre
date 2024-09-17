import { Controller, Get, Param, UseGuards,Request,Post, Body, Delete, Put } from '@nestjs/common';
import { ListaUsuarioPessoalDTO } from 'src/modules/user/dtos/ListaUsuario.dto';
import { JwtAuthGuardUser } from 'src/modules/user/Guards/jwt-auth-user.guard';
import { RolesGuardUser } from 'src/modules/user/Guards/roles-user.guard';
import { UserService } from 'src/modules/user/services/user.service';
import { HistoricoService } from '../services/historico.service';
import { UpdateHistoricoDto } from '../dtos/AtualizarHistorico.dto';
import { CreateHistoricoDto } from '../dtos/CriarHistorico.dto';


@Controller('historico')
export class HistoricoController {

  constructor(
    private readonly userService: UserService,
    private readonly historicoService: HistoricoService
  ) {
  
  }

  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('listaHistorico/:nome')
  async findProductsWithStore(@Request() req) {

    const id = req.user.userId;

    const user:ListaUsuarioPessoalDTO = await this.userService.ListaUmUsuarioDono(id);

    const idsHistorico:string[] = user.historico_de_viagens;

    const historicos = await this.historicoService.findByIds(idsHistorico);
  
  }

  @Get()
  findAll() {
    return this.historicoService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicoService.findOne(id);
  }


  @Post()
  create(@Body() createHistoricoDto: CreateHistoricoDto) {
    return this.historicoService.create(createHistoricoDto);
  }


  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoricoDto: UpdateHistoricoDto,
  ) {
    return this.historicoService.update(id, updateHistoricoDto);
  }


}
