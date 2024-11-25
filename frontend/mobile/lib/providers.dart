import 'package:mobile/core/auth_provider.dart';
import 'package:mobile/core/service/imgbb_service.dart';
import 'package:mobile/features/login/data/repositories/login_repository.dart';
import 'package:mobile/features/login/data/service/login_service.dart';
import 'package:mobile/features/login/presentation/viewmodels/login_viewmodel.dart';
import 'package:mobile/features/usuario/data/repositories/cadastro_usuario_repository.dart';
import 'package:mobile/features/usuario/data/repositories/gerenciar_conta_repository%20copy.dart';
import 'package:mobile/features/usuario/data/services/cadastro_usuario_service.dart';
import 'package:mobile/features/usuario/presentation/viewmodels/cadastro_usuario_viewmodel.dart';
import 'package:mobile/features/usuario/presentation/viewmodels/gerenciar_conta_viewmodel.dart';
import 'package:mobile/features/viagem/data/repositories/viagem_detalhes_repository.dart';
import 'package:mobile/features/viagem/data/repositories/viagem_pesquisa_repository.dart';
import 'package:mobile/features/usuario/data/services/Listar_usuario_service.dart';
import 'package:mobile/features/viagem/data/services/viagem_detalhes_service.dart';
import 'package:mobile/features/viagem/data/services/viagem_pesquisa_service.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/detalhes_viagem_viewmodel.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/pesquisa_viagem_viewmodel.dart';
import 'package:provider/provider.dart';
import 'package:mobile/core/http_client.dart';
import 'package:provider/single_child_widget.dart';

List<SingleChildWidget> getProviders() {
  // Instância do HttpClient
  final httpClient = HttpClient(); // Usa a URL base configurada no HttpClient
  final dio = httpClient.client;

 // Instância do Service e Repository
  // Instância dos serviços
  final viagemPesquisaService = ViagemPesquisaService(client: dio);
  final viagemDetalhesService = ViagemDetalhesService(client: dio);
  final listarUsuarioService = ListarUsuarioService(client: dio);
  final loginService = LoginService(client: dio);
  final usuarioService = CadastroUsuarioService(client: dio);
  final imgbbService = ImgbbService(client: dio);
  

  // Instância dos repositórios
  final viagemPesquisaRepository = ViagemPesquisaRepository(servicePesquisaViagem: viagemPesquisaService,listarUsuarioService: listarUsuarioService);
  final viagemDetalhesRepository = ViagemDetalhesRepository(serviceDetalhesViagem: viagemDetalhesService,listarUsuarioService: listarUsuarioService);
  final gerenciaContaRepository = GerenciarContaRepository(listarUsuarioService: listarUsuarioService);
  final loginRepository = LoginRepository(service: loginService);
  final cadastroUsuarioRepository = CadastroUsuarioRepository(
    cadastroUsuarioService: usuarioService,
    imgbbService: imgbbService,
  );

  return [
    // ViewModel de Pesquisa
    ChangeNotifierProvider<ViagemPesquisaViewModel>(
      create: (_) => ViagemPesquisaViewModel(repository: viagemPesquisaRepository),
    ),
    // ViewModel de Detalhes
    ChangeNotifierProvider<ViagemDetalhesViewModel>(
      create: (_) => ViagemDetalhesViewModel(repository: viagemDetalhesRepository),
    ),
    ChangeNotifierProvider<LoginViewModel>(
    create: (_) => LoginViewModel(repository: loginRepository),
    ),
    ChangeNotifierProvider<AuthProvider>(
      create: (_) => AuthProvider(),
    ),
    ChangeNotifierProvider<CadastroUsuarioViewModel>(
      create: (_) => CadastroUsuarioViewModel(repository: cadastroUsuarioRepository),
    ),
    ChangeNotifierProvider<GerenciaContaViewModel>(
      create: (_) => GerenciaContaViewModel(repository: gerenciaContaRepository),
    ),
  ];
}
