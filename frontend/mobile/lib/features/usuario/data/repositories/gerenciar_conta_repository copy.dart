import 'package:mobile/core/service/imgbb_service.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_model.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_resposta_model.dart';
import 'package:mobile/features/usuario/data/services/Listar_usuario_service.dart';
import 'package:mobile/features/usuario/data/services/cadastro_usuario_service.dart';
import 'package:mobile/features/usuario/domain/entities/dono_usuario_entity.dart';

class GerenciarContaRepository {
  final ListarUsuarioService listarUsuarioService;

  GerenciarContaRepository({required this.listarUsuarioService});

  /// Apenas repassa o retorno do Service
  Future<UsuarioDono> ListaUsuarioDono(String token) async {
    try {
      
      return await listarUsuarioService.fetchUsuarioDono(token);
    } catch (e) {
      throw Exception('Erro no repository: $e');
    }
  }
}
