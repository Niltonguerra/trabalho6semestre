import { PrestadorService } from '../services/prestador.service';
import { ListaPrestadorPessoalDTO, ListaPrestadorPublicoDTO } from '../dtos/prestador/ListaPrestador.dto';
import { AtualizaPrestadorDTO } from '../dtos/prestador/AtualizarPrestador.dto';
import { MensagemRetornoDTO } from '../dtos/Mensagens.dto';
export declare class PrestadorController {
    private readonly prestadorservice;
    constructor(prestadorservice: PrestadorService);
    findByField(campo: string, valor: string, limit: number): Promise<{
        resultado: ListaPrestadorPublicoDTO[];
        message: string;
    }>;
    ListaPrestadorsPublicos(): Promise<{
        Prestador: ListaPrestadorPublicoDTO[];
        message: string;
    }>;
    findById(req: any): Promise<{
        Prestador: ListaPrestadorPessoalDTO;
        message: string;
    }>;
    update(req: any, Prestador: AtualizaPrestadorDTO): Promise<MensagemRetornoDTO>;
}
