import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart'; // Importar o pacote dotenv
import 'package:mobile/features/VirarPrestadorDeServicos/presentation/pages/solicitar_virar_prestador_page.dart';
import 'package:mobile/features/cadastra_editar_usuario/presentation/pages/cadastro_usuario_page.dart';
import 'package:mobile/features/cadastrar_editar_carro/presentation/pages/cadastrar_carro_page.dart';
import 'package:mobile/features/cadastrar_editar_carro/presentation/pages/editar_carro_page.dart';
import 'package:mobile/features/cadastra_editar_usuario/presentation/pages/editar_usuario_page.dart';
import 'package:mobile/features/chat/presentation/pages/chat_page.dart';
import 'package:mobile/features/chat/presentation/pages/lista_usuario_chat_page.dart';
import 'package:mobile/features/conta/presentation/pages/gerenciar_conta_page.dart';
import 'package:mobile/features/historico/presentation/pages/detalhes_historico_page.dart';
import 'package:mobile/features/historico/presentation/pages/pesquisa_historico_page.dart';
import 'package:mobile/features/login/presentation/pages/login_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/formulario_card_cred_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/lista_meios_pagamento_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/notificar_pagamento_page.dart';
import 'package:mobile/features/pagamento/presentation/pages/pagamento_page.dart';
import 'package:mobile/features/politica_de_seguranca/presentation/pages/politica_seguranca_page.dart';
import 'package:mobile/features/viagem/presentation/pages/detalhes_viagem_page.dart';
import 'package:mobile/features/viagem/presentation/pages/pesquisa_viagem_page.dart';
import 'package:mobile/teste.dart';
import 'package:flutter_stripe/flutter_stripe.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(); 
  Stripe.publishableKey = 'pk_test_51QD6yqCrlTCpKLoSDysVxuS25WRE2fVvNdurFlXdvqwcHfCDjq7nwhcqPAYDtUQ5TkLMHzajBptjcbiWtqoBVI2j00BPOVBPut';
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navigation Example',
      initialRoute: '/pagamento',
      routes: {
        '/login': (context) => LoginPage(),
        '/teste': (context) => TestePage(),
        '/cadastroUsuario': (context) => CadastroUsuarioPage(),
        '/editarUsuario': (context) => EditarUsuarioPage(),
        '/cadastrarCarro': (context) => CadastrarCarroPage(),
        '/editarCarro': (context) => EditarCarroPage(),
        '/politicaSeguranca': (context) => PoliticaSegurancaPage(),
        '/pesquisaViagem': (context) => PesquisaViagemPage(),
        '/pesquisaHistorico': (context) => PesquisaHistoricoPage(),
        '/detalhesViagem': (context) => DetalhesViagemPage(),
        '/detalhesHistorico': (context) => DetalhesHistoricoPage(),
        '/solicitarVirarPrestador': (context) => SolicitarVirarPrestadorPage(),
        '/gerenciarConta': (context) => GerenciarContaPage(),
        '/chat': (context) => ChatPage(),
        '/listaUsuarioChat': (context) => UserListChatPage(),
        '/pagamento': (context) => PaymentPage(),
        '/listaMeiosPagamento': (context) => ListPamentoMeioPage(),
        '/formularioCartaoCredito': (context) => CreditCardFormPage(),
        '/notificarPagamento': (context) => NotificarPagamentoPage(),
      },
    );
  }
}
