import 'package:flutter/material.dart';
import 'package:mobile/features/usuario/submodules/VirarPrestadorDeServicos/presentation/pages/solicitar_virar_prestador_page.dart';
import 'package:mobile/features/usuario/presentation/pages/cadastro_usuario_page.dart';
import 'package:mobile/features/usuario/submodules/carro/presentation/pages/cadastrar_carro_page.dart';
import 'package:mobile/features/usuario/submodules/carro/presentation/pages/editar_carro_page.dart';
import 'package:mobile/features/usuario/presentation/pages/editar_usuario_page.dart';
import 'package:mobile/features/chat/presentation/pages/chat_page.dart';
import 'package:mobile/features/chat/presentation/pages/lista_usuario_chat_page.dart';
import 'package:mobile/features/usuario/presentation/pages/gerenciar_conta_page.dart';
import 'package:mobile/features/historico/presentation/pages/detalhes_historico_page.dart';
import 'package:mobile/features/historico/presentation/pages/pesquisa_historico_page.dart';
import 'package:mobile/features/login/presentation/pages/login_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/formulario_card_cred_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/lista_meios_pagamento_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/notificar_pagamento_page.dart';
import 'package:mobile/features/viagem/presentation/pages/detalhes_viagem_page.dart';
import 'package:mobile/features/viagem/presentation/pages/pesquisa_viagem_page.dart';
import 'package:mobile/features/politica_de_seguranca/presentation/pages/politica_seguranca_page.dart';

class AppRoutes {
  static const String initialRoute = '/login';

  static Route<dynamic> onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/login':
        return MaterialPageRoute(builder: (_) => LoginPage());
      case '/cadastroUsuario':
        return MaterialPageRoute(builder: (_) => CadastroUsuarioPage());
      case '/editarUsuario':
        return MaterialPageRoute(builder: (_) => EditarUsuarioPage());
      case '/cadastrarCarro':
        return MaterialPageRoute(builder: (_) => CadastrarCarroPage());
      case '/editarCarro':
        return MaterialPageRoute(builder: (_) => EditarCarroPage());
      case '/politicaSeguranca':
        return MaterialPageRoute(builder: (_) => PoliticaSegurancaPage());
      case '/pesquisaViagem':
        return MaterialPageRoute(builder: (_) => PesquisaViagemPage());
      case '/pesquisaHistorico':
        return MaterialPageRoute(builder: (_) => PesquisaHistoricoPage());
      case '/detalhesViagem':
        // Passando parâmetros dinâmicos
        final args = settings.arguments as Map<String, String>;
        return MaterialPageRoute(
          builder: (_) => DetalhesViagemPage(
            idViagem: args['idViagem']!,
            ),
        );
      case '/detalhesHistorico':
        return MaterialPageRoute(builder: (_) => DetalhesHistoricoPage());
      case '/solicitarVirarPrestador':
        return MaterialPageRoute(builder: (_) => SolicitarVirarPrestadorPage());
      case '/gerenciarConta':
        return MaterialPageRoute(builder: (_) => GerenciarContaPage());
      case '/chat':
        return MaterialPageRoute(builder: (_) => ChatPage());
      case '/listaUsuarioChat':
        return MaterialPageRoute(builder: (_) => UserListChatPage());
      case '/listaMeiosPagamento':
        return MaterialPageRoute(builder: (_) => ListPamentoMeioPage());
      case '/notificarPagamento':
        return MaterialPageRoute(builder: (_) => NotificarPagamentoPage());
      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(child: Text('Página não encontrada')),
          ),
        );
    }
  }
}
