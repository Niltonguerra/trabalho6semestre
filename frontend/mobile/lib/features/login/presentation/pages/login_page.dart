// lib/second_screen.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/res/font_res.dart';
import 'package:http/http.dart' as http; // Adicione esta importação

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();















  // Função para enviar os dados para a API
  Future<void> _login() async {
    final String email = _emailController.text;
    final String password = _passwordController.text;

    if (email.isEmpty || password.isEmpty) {
      _showErrorDialog('Por favor, preencha todos os campos.');
      return;
    }

    try {
      final response = await http.post(
        Uri.parse('https://sua-api.com/login'), // Substitua pela URL da sua API
        headers: {'Content-Type': 'application/json'},
        body: {
          'email': email,
          'password': password,
        },
      );

      if (response.statusCode == 200) {
        // Sucesso
        Navigator.pushNamed(context, '/second');
      } else {
        // Falha
        _showErrorDialog('Falha no login. Verifique suas credenciais.');
      }
    } catch (e) {
      _showErrorDialog('Ocorreu um erro. Tente novamente.');
    }
  }













  // Função para exibir um diálogo de erro
  void _showErrorDialog(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Erro'),
          content: Text(message),
          actions: <Widget>[
            TextButton(
              child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }













  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('Login'),
      // ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [primaryColor, thirdColor],
            begin: Alignment.bottomCenter,
            end: Alignment.topCenter,
          ),
        ),
        padding: const EdgeInsets.all(43.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'LOGIN',
                style: TextStyle(fontFamily: FontRes.INTER_REGULAR, fontSize: 40),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  SizedBox(height: 20),
                  CaixaDeTexto(
                    controller: _emailController,
                    labelText: 'Email:',
                  ),
                  SizedBox(height: 20),
                  CaixaDeTexto(
                    controller: _passwordController,
                    labelText: 'Senha:',
                  ),
                  SizedBox(height: 20),
                  Text(
                    'esqueceu a senha?',
                    style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
                  ),
                ],
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: _login,
                child: Text(
                  'Entrar!',
                  style: TextStyle(fontFamily: FontRes.INTER_REGULAR),
                ),
                style: ElevatedButton.styleFrom(
                  foregroundColor: fivethColor,
                  backgroundColor: fourthColor,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12.0),
                  ),
                  minimumSize: Size(168, 36),
                ),
              ),
              SizedBox(height: 20),
              Text(
                'novo por aqui? cadastre-se',
                style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
