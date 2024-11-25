import 'package:mobile/features/usuario/data/services/Listar_usuario_service.dart';
import 'package:mobile/features/viagem/data/services/viagem_detalhes_service.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:mobile/features/usuario/domain/entities/prestador_entity.dart';


class ViagemDetalhesRepository {
  final ViagemDetalhesService serviceDetalhesViagem;
  final ListarUsuarioService listarUsuarioService;

  ViagemDetalhesRepository({
    required this.serviceDetalhesViagem, 
    required this.listarUsuarioService
  });

  Future<Viagem> fetchViagem(String idViagem, String token) async {
    try {
      return await serviceDetalhesViagem.fetchViagem(idViagem, token);
    } catch (e) {
    throw Exception('Erro no repository: $e');
  }
  }

  Future<Prestador> fetchPrestadorPorNome(String nome, String token) async {
    try {
    return await listarUsuarioService.fetchUsuarioPorNome(nome, token);
        } catch (e) {
      throw Exception('Erro no repository: $e');
    }
  }
}
