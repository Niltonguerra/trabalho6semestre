import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnGrande.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCaroneiro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCarro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardDetalhesViagem.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/res/font_res.dart';

class SolicitarVirarPrestadorPage extends StatefulWidget {
  @override
  _SolicitarVirarPrestadorPageState createState() => _SolicitarVirarPrestadorPageState();
}

class _SolicitarVirarPrestadorPageState extends State<SolicitarVirarPrestadorPage> {
  final TextEditingController _CnhController = TextEditingController();
  final TextEditingController _RgController = TextEditingController();
  final TextEditingController _CrlvController = TextEditingController();
  final TextEditingController _DpvatController = TextEditingController();
  File? _selectedImage;


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
        backgroundColor: secondaryColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: fivethColor),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
      ),
      body: Scrollbar(
        child: SingleChildScrollView(
          child: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [thirdColor, primaryColor, secondaryColor],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      'Venha se tornar um parceiro da MoveSmart',
                      style: TextStyle(
                        fontSize: 32,
                        color: fourthColor,
                        fontFamily: FontRes.INTER_REGULAR,
                      ),
                      textAlign: TextAlign.center, // Opcional: Alinha o texto no centro
                    ),
                    SizedBox(height: 15),
                    Text(
                      'Preencha abaixo com suas informações pessoais.',
                      style: TextStyle(
                        fontSize: 20,
                        color: fourthColor,
                        fontFamily: FontRes.ROBOTO_REGULAR,
                      ),
                      textAlign: TextAlign.center, // Opcional: Alinha o texto no centro
                    ),
                    SizedBox(height: 15),
                    CaixaDeTexto(
                        controller: _CnhController,
                        labelText: 'CNH:'
                    ),
                    SizedBox(height: 15),
                    CaixaDeTexto(
                        controller: _RgController,
                        labelText: 'RG:'
                    ),
                    SizedBox(height: 15),
                    CaixaDeTexto(
                        controller: _CrlvController,
                        labelText: 'Certificado de Registro e Licenciamento de Veículo (CRLV):'
                    ),
                    SizedBox(height: 15),
                    CaixaDeTexto(
                        controller: _DpvatController,
                        labelText: 'Seguro Obrigatório (DPVAT):'
                    ),
                    SizedBox(height: 20),


                    ImagePickerWidget(
                      onImagePicked: _handleImagePicked,
                      txt_cor_fundo: fivethColor,
                      txt_cor_texto: fourthColor,
                      txt_botao: 'Adicione a foto da sua CNH',
                    ),

                    SizedBox(height: 30),


                    BtnGrande(
                      onPressed: _cadastrar,
                      txt_botao: 'Tornar-se um parceiro!',
                      txt_cor_fundo: primaryColor,
                      txt_cor_texto: fivethColor,
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
