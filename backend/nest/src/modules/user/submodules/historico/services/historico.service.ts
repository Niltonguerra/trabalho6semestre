import { Injectable } from '@nestjs/common';
import { ListaHistoricoDTO } from '../dtos/ListaHistorico.dto';

@Injectable()
export class HistoricoService {




  async ListaHistorico(id: string):Promise <ListaHistoricoDTO[] | null >{

    return
  }

  async ListaUmItemHistorico(id: string):Promise <ListaHistoricoDTO[] | null >{

    return
  }

}
