import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardListaSimples.dart';
import 'package:mobile/res/font_res.dart';

class User {
  final String id;
  final String name;
  final String avatarUrl;

  User({required this.id, required this.name, required this.avatarUrl});
}

class ListPamentoMeioPage extends StatelessWidget {
  void _cadastrar() async {
    // final result = await loginUseCase(
    //   email: _emailController.text,
    //   password: _senhaController.text,
    // );
    //
    // print('Email: ${_emailController.text}'); // Corrigido para imprimir o email
    //
    // if (result) {
    //   Navigator.pushNamed(context, '/second');
    // } else {
    //   showErrorDialog(context, 'Falha no cadastro. Verifique suas informações.');
    // }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: thirdColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: fivethColor),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: Text(
          'Meios de pagamento',
          style: TextStyle(
            fontSize: 24,
            fontFamily: FontRes.INTER_REGULAR,
            color: fivethColor,
          ),
        ),
      ),



      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [primaryColor, thirdColor],
            begin: Alignment.bottomCenter,
            end: Alignment.topCenter,
          ),
        ),
        padding: const EdgeInsets.all(15),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CardListaSimples(
                  image: 'assets/images/pix_logo.png',
                  txt_cor_fundo: primaryColor,
                  txt_cor_detalhes: thirdColor,
                  onPressed: _cadastrar,
                  txt_cor_fonte: fourthColor,
                  txt_texto_principal: 'Pix',
              ),
              SizedBox(height: 7),
              CardListaSimples(
                image: 'assets/images/credit_card.png',
                txt_cor_fundo: primaryColor,
                txt_cor_detalhes: thirdColor,
                onPressed: _cadastrar,
                txt_cor_fonte: fourthColor,
                txt_texto_principal: 'Cartão de Crédito',
              ),
              SizedBox(height: 7),
              CardListaSimples(
                image: 'assets/images/money.png',
                txt_cor_fundo: primaryColor,
                txt_cor_detalhes: thirdColor,
                onPressed: _cadastrar,
                txt_cor_fonte: fourthColor,
                txt_texto_principal: 'Pagar na hora ',
              ),
            ],
          ),
        ),
      ),
    );
  }
}
