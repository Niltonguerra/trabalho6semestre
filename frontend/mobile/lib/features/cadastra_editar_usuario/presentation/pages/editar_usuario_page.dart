import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnPreto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/features/login/domain/usecases/login_use_case.dart';
import 'package:mobile/features/login/presentation/widgets/error_dialog.dart';
import 'package:mobile/res/font_res.dart';

class EditarUsuarioPage extends StatefulWidget {
  @override
  _EditarUsuarioPageState createState() => _EditarUsuarioPageState();
}

class _EditarUsuarioPageState extends State<EditarUsuarioPage> {
  final TextEditingController _nomeController = TextEditingController();
  final TextEditingController _senhaController = TextEditingController();
  final TextEditingController _senhaDeNovoController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _telefoneController = TextEditingController();
  final TextEditingController _enderecoController = TextEditingController();

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
                    'Editar Conta! 😊',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: FontRes.INTER_REGULAR,
                      fontSize: 40,
                    ),
                  ),


                  SizedBox(height: 30),

                ImagePickerWidget(
                  onImagePicked: _handleImagePicked,
                  txt_cor_fundo: fourthColor,
                  txt_cor_texto: fivethColor,
                  txt_botao: 'Escolha uma foto de perfil',
                ), // Adicionando o widget de seleção de imagem

                  SizedBox(height: 30),

                  CaixaDeTexto(
                    controller: _nomeController,
                    labelText: 'Nome:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _senhaController,
                    labelText: 'Senha:',
                  ),
                  SizedBox(height: 30),

                  CaixaDeTexto(
                    controller: _senhaDeNovoController,
                    labelText: 'Digite novamente a sua senha:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _telefoneController,
                    labelText: 'Telefone:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _enderecoController,
                    labelText: 'Endereço:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _emailController,
                    labelText: 'email:',
                  ),
                  SizedBox(height: 30),
                  BtnPreto(
                    onPressed: _cadastrar, // Passar a função diretamente
                    labelText: 'Atualizar!',
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
    final result = await loginUseCase(
      email: _emailController.text,
      password: _senhaController.text,
    );

    print('Email: ${_emailController.text}'); // Corrigido para imprimir o email

    if (result) {
      Navigator.pushNamed(context, '/second');
    } else {
      showErrorDialog(context, 'Falha no cadastro. Verifique suas informações.');
    }
  }
}
