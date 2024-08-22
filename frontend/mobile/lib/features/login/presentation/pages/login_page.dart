import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/features/login/domain/usecases/login_use_case.dart';
import 'package:mobile/features/login/presentation/widgets/error_dialog.dart';
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
              CaixaDeTexto(
                controller: _passwordController,
                labelText: 'Senha:',
              ),
              SizedBox(height: 20),
              Text(
                'esqueceu a senha?',
                style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () => _login(),
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
                    'novo por aqui? cadastre-se',
                    style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
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
                        color: secondaryColor, // Cor do texto
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
    final result = await loginUseCase(
      email: _emailController.text,
      password: _passwordController.text,
    );

    if (result) {
      Navigator.pushNamed(context, '/second');
    } else {
      showErrorDialog(context, 'Falha no login. Verifique suas credenciais.');
    }
  }
}
