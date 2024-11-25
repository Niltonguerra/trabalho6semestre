import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:mobile/features/login/presentation/viewmodels/login_viewmodel.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Input/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Input/InputSenha.dart';
import 'package:mobile/features/login/presentation/widgets/error_dialog.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<LoginViewModel>();

    return Scaffold(
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
              SizedBox(height: 20),
              CaixaDeTexto(
                controller: _emailController,
                labelText: 'Email:',
              ),
              SizedBox(height: 20),
              InputSenha(
                controller: _passwordController,
                labelText: 'Senha:',
              ),
              SizedBox(height: 20),
              if (viewModel.errorMessage != null)
                Text(
                  'Erro ao fazer login, tente novamente.',
                  style: TextStyle(color: fourthColor, fontSize: 14),
                ),
              SizedBox(height: 20),
              viewModel.isLoading
                  ? CircularProgressIndicator()
                  : ElevatedButton(
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
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'novo por aqui?',
                    style: TextStyle(
                        fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
                  ),
                  TextButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/cadastroUsuario');
                    },
                    child: Text(
                      'cadastre-se',
                      style: TextStyle(
                        fontSize: 15,
                        fontFamily: FontRes.ROBOTO_REGULAR,
                        color: secondaryColor,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _login() async {
    final viewModel = context.read<LoginViewModel>();

    final result = await viewModel.login(
      email: _emailController.text,
      password: _passwordController.text,
      context: context,
    );

    if (result) {
      final token = viewModel.response?.token;
      Navigator.pushNamed(
              context,
              '/pesquisaViagem',
      );
    } else {
      showErrorDialog(
          context, viewModel.errorMessage ?? 'Erro ao fazer login.');
    }
  }
}
