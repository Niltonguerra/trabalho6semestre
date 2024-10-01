import { Controller, Get, Post, Param, Body, Request, UseGuards } from '@nestjs/common';
import { ListarViagemDto } from '../dtos/ListaViagem.dto';
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
import { ViagemUsuarioService } from '../services/viagemUsuario.service';
import { RolesGuardUser } from 'src/modules/user/Guards/rolesUser.guard';
import { JwtAuthGuardUser } from 'src/modules/user/Guards/jwtAuthUser.guard';

@Controller('viagens')
export class ViagemUsuarioController {
  constructor(private readonly viagemUsuarioService: ViagemUsuarioService) {}


  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('listaUmaViagem')
  async listarUmViagem(@Body('idViagem') idViagem: string): Promise<{ MensagemRetornoDTO, ListarViagemDto }> {
    return this.viagemUsuarioService.listarUmViagem(idViagem);
  }

  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('usuarioViagens')
  async listaTodasAsViagensPorUsuario(@Request() req): Promise<{ MensagemRetornoDTO, ListarViagemDto }> {
    const userId = req.user.userId;
    return this.viagemUsuarioService.listaTodasAsViagensPorUsuario(userId);
  }

  // Endpoint para solicitar uma viagem
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('solicitar')
  async solicitarViagem(@Body('idViagem') idViagem: string, @Request() req ): Promise<MensagemRetornoDTO> {
    const userId = req.user.userId;
    return this.viagemUsuarioService.solicitarViagem(idViagem, userId);
  }

  // Endpoint para finalizar uma viagem
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get('finalizar')
  async finalizarViagem(@Body('idViagem') idViagem: string): Promise<MensagemRetornoDTO> {
    return this.viagemUsuarioService.finalizarViagem(idViagem);
  }
}
