import 'package:mobile/core/service/imgbb_service.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_model.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_resposta_model.dart';
import 'package:mobile/features/usuario/data/services/cadastro_usuario_service.dart';

class CadastroUsuarioRepository {
  final CadastroUsuarioService cadastroUsuarioService;
  final ImgbbService imgbbService;

  CadastroUsuarioRepository(
      {required this.cadastroUsuarioService, required this.imgbbService});

  /// Apenas repassa o retorno do Service
  Future<ApiResponse> cadastrarUsuario(UsuarioCriarModel usuario) async {


    final imagemTratada = await imgbbService.uploadImage(usuario.foto);
    usuario.foto = imagemTratada['imagem_grande'];


    final cadastrarUsuario =
        await cadastroUsuarioService.cadastrarUsuario(usuario);
    
    return cadastrarUsuario;
  }
}
