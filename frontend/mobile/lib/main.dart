// lib/main.dart

import 'package:flutter/material.dart';
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
      initialRoute: '/', // Rota inicial
      routes: {
        '/': (context) => LoginPage(),
        '/second': (context) => HomePage(),
        '/teste': (context) => TestePage(),// Definindo a primeira tela como rota inicial
      },
    );
  }
}
