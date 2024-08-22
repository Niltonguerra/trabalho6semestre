// lib/main.dart

import 'package:flutter/material.dart';
import 'package:mobile/features/Politica%20de%20Seguran%C3%A7a/presentation/pages/politica_seguranca_page.dart';
import 'package:mobile/features/cadastra_usuario/presentation/pages/cadastro_usuario_page.dart';
import 'package:mobile/features/cadastrar_carro/presentation/pages/cadastrar_carro.dart';
import 'package:mobile/features/editar_carro/presentation/pages/editar_carro.dart';
import 'package:mobile/features/editar_usuario/presentation/pages/editar_usuario.dart';
import 'package:mobile/features/home/presentation/pages/home_page.dart';
import 'package:mobile/features/login/presentation/pages/login_page.dart';
import 'package:mobile/teste.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navigation Example',
      initialRoute: '/teste', // Rota inicial
      routes: {
        '/login': (context) => LoginPage(),
        '/second': (context) => HomePage(),
        '/teste': (context) => TestePage(),
        '/cadastroUsuario': (context) => CadastroUsuarioPage(),
        '/editarUsuario': (context) => EditarUsuarioPage(),
        '/cadastrarCarro': (context) => CadastrarCarroPage(),
        '/editarCarro': (context) => EditarCarroPage(),
        '/politicaSeguranca': (context) => PoliticaSegurancaPage(),
      },
    );
  }
}
