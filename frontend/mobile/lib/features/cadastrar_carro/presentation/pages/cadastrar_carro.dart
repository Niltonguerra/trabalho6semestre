import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/BtnPreto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/features/login/domain/usecases/login_use_case.dart';
import 'package:mobile/features/login/presentation/widgets/error_dialog.dart';
import 'package:mobile/res/font_res.dart';

class CadastrarCarroPage extends StatefulWidget {
  @override
  _CadastrarCarroPageState createState() => _CadastrarCarroPageState();
}

class _CadastrarCarroPageState extends State<CadastrarCarroPage> {
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
                colors: [fourthColor,primaryColor,thirdColor],
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
                    'Cadastre o seu carro aqui! \n 😉',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: FontRes.INTER_REGULAR,
                      fontSize: 40,
                    ),
                  ),


                  SizedBox(height: 30),

                  ImagePickerWidget(
                    onImagePicked: _handleImagePicked,
                  ), // Adicionando o widget de seleção de imagem

                  SizedBox(height: 30),

                  CaixaDeTexto(
                    controller: _modeloController,
                    labelText: 'modelo:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _placaController,
                    labelText: 'placa:',
                  ),
                  SizedBox(height: 30),

                  CaixaDeTexto(
                    controller: _corController,
                    labelText: 'cor:',
                  ),
                  SizedBox(height: 30),

                  CaixaDeTexto(
                    controller: _anoController,
                    labelText: 'ano:',
                  ),

                  SizedBox(height: 30),
                  BtnPreto(
                    onPressed: _cadastrar, // Passar a função diretamente
                    labelText: 'Cadastrar!',
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
