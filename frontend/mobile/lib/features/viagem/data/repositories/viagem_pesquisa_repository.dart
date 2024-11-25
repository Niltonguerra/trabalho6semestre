import 'package:mobile/features/usuario/data/services/Listar_usuario_service.dart';
import 'package:mobile/features/usuario/domain/entities/dono_usuario_entity.dart';
import 'package:mobile/features/viagem/data/services/viagem_pesquisa_service.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';

class ViagemPesquisaRepository {
  final ViagemPesquisaService servicePesquisaViagem;
  final ListarUsuarioService listarUsuarioService;

  ViagemPesquisaRepository({
    required this.servicePesquisaViagem,
    required this.listarUsuarioService,
  });

  /// Retorna todas as viagens do serviço.
  Future<List<Viagem>> listarTodasViagens() async {
    try {
      return await servicePesquisaViagem.listarTodasViagens();
    } catch (e) {
      throw Exception('Erro no repository: $e');
    }
  }

  Future<UsuarioDono> fetchDadosPessoais(String token) async {
    try {
    return await listarUsuarioService.fetchUsuarioDono(token);
        } catch (e) {
      throw Exception('Erro no repository: $e');
    }
  }
}
