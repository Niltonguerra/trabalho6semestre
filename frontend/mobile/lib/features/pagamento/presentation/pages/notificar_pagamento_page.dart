import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnPreto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/res/font_res.dart';

class NotificarPagamentoPage extends StatefulWidget {
  @override
  _NotificarPagamentoPageState createState() => _NotificarPagamentoPageState();
}

class _NotificarPagamentoPageState extends State<NotificarPagamentoPage> {
  final TextEditingController _modeloController = TextEditingController();
  final TextEditingController _placaController = TextEditingController();
  final TextEditingController _corController = TextEditingController();
  final TextEditingController _anoController = TextEditingController();


  File? _selectedImage; // Variável para armazenar a imagem selecionada

  void _handleImagePicked(File? image) {
    setState(() {
      _selectedImage = image;
    });

    if (_selectedImage != null) {
      print('Imagem selecionada: ${_selectedImage!.path}');
    } else {
      print('Nenhuma imagem selecionada.');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Scrollbar(
        child: SingleChildScrollView(
          child: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [secondaryColor,primaryColor],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
            padding: const EdgeInsets.all(25.0),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(height: 50),
                  Text(
                    'Parabéns!!!',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: FontRes.INTER_REGULAR,
                      fontSize: 30,
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    'você está muito perto de finalizar seu pagamento \n 😉',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: FontRes.INTER_REGULAR,
                      fontSize: 20,
                    ),
                  ),

                  SizedBox(height: 30),


                  BtnPreto(
                    onPressed: _cadastrar, // Passar a função diretamente
                    labelText: 'Finalizar pagamento',
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

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
}
