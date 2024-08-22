import 'dart:io';

import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/BtnPreto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/mensagens_layout/MensagemConfirmacao.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/mensagens_layout/MensagemDuasOpcoes.dart';
import 'package:mobile/features/login/domain/usecases/login_use_case.dart';
import 'package:mobile/features/login/presentation/widgets/error_dialog.dart';
import 'package:mobile/res/font_res.dart';

class CadastroUsuarioPage extends StatefulWidget {
  @override
  _CadastroUsuarioPageState createState() => _CadastroUsuarioPageState();
}

class _CadastroUsuarioPageState extends State<CadastroUsuarioPage> {
  final TextEditingController _nomeController = TextEditingController();
  final TextEditingController _senhaController = TextEditingController();
  final TextEditingController _senhaDeNovoController = TextEditingController();
  final TextEditingController _dataNascimentoController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _telefoneController = TextEditingController();
  final TextEditingController _enderecoController = TextEditingController();
  final TextEditingController _cpfController = TextEditingController();

  File? _selectedImage; // Variável para armazenar a imagem selecionada
  bool _aceitouPoliticas = false; // Estado da caixa de seleção

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

    if (!_aceitouPoliticas) {

      mostrarMensagemConfirmacao(
        context,
            () {
          print('Botão do diálogo pressionado');
        },
        'Por favor, aceite as políticas de segurança',
        'Você precisa aceitar as políticas de segurança para continuar.',
        'fechar',
      );
      // mostrarMensagemDuasOpcoes(
      //   context,
      //       () {
      //     // Navega para a nova página quando o primeiro botão é pressionado
      //     Navigator.pushNamed(context, '/editarCarro');
      //   },
      //       () {
      //     // Navega para outra página quando o segundo botão é pressionado
      //     // Navigator.pushNamed(context, '/politicaSeguranca');
      //   },
      //   'Título da Mensagem',
      //   'Aqui está a mensagem com duas opções para você escolher.',
      //   'Opção 1',
      //   'Opção 2',
      // );
      return;
    }


    final result = await loginUseCase(
      email: _emailController.text,
      password: _senhaController.text,
    );

    print('Email: ${_emailController.text}'); // Corrigido para imprimir o email

    if (result) {
      Navigator.pushNamed(context, '/login');
    } else {
      mostrarMensagemConfirmacao(
        context,
            () {
          print('Botão do diálogo pressionado');
        },
        'Falha no cadastro',
        'Verifique suas informações e tente novamente.',
        'fechar',
      );
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
                colors: [primaryColor,thirdColor],
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
                    'Cadastre-se 😉',
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
                    controller: _dataNascimentoController,
                    labelText: 'Data de nascimento:',
                  ),
                  SizedBox(height: 30),
                  CaixaDeTexto(
                    controller: _emailController,
                    labelText: 'Email:',
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
                    controller: _cpfController,
                    labelText: 'CPF:',
                  ),
                  SizedBox(height: 30),



                  Row(
                    children: [
                      Checkbox(
                        value: _aceitouPoliticas,
                        onChanged: (bool? value) {
                          setState(() {
                            _aceitouPoliticas = value ?? false;
                          });
                        },
                      ),
                      Text(
                        'aceita as',
                        style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
                      ),
                      TextButton(
                        onPressed: () {
                          Navigator.pushNamed(context, '/politicaSeguranca');
                        },
                        child: Text(
                          'políticas de segurança',
                          style: TextStyle(
                            fontSize: 15,
                            fontFamily: FontRes.ROBOTO_REGULAR,
                            color: secondaryColor, // Cor do texto
                          ),
                        ),
                      ),
                    ],
                  ),





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


}
