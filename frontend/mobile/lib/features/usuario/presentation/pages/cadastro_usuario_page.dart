import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter_masked_text2/flutter_masked_text2.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Input/InputDate.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Input/InputSenha.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnPreto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Input/CaixaDeTexto.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/InputImage.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/mensagens_layout/MensagemConfirmacao.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_model.dart';
import 'package:mobile/features/usuario/domain/validators/validators.dart';
import 'package:mobile/features/usuario/presentation/viewmodels/cadastro_usuario_viewmodel.dart';
import 'package:mobile/res/font_res.dart';
import 'package:provider/provider.dart';
import 'package:mobile/core/variables/colors.dart';

class CadastroUsuarioPage extends StatefulWidget {
  @override
  _CadastroUsuarioPageState createState() => _CadastroUsuarioPageState();
}

class _CadastroUsuarioPageState extends State<CadastroUsuarioPage> {
  final _formKey = GlobalKey<FormState>();

  final _nomeController = TextEditingController();
  final _senhaController = TextEditingController();
  final _senhaDeNovoController = TextEditingController();
  final _dataNascimentoController = TextEditingController();
  final _emailController = TextEditingController();
  final _enderecoController = TextEditingController();
  final _cpfController = MaskedTextController(mask: '000.000.000-00');
  final _telefoneController = MaskedTextController(mask: '(00)00000-0000');

  File? _selectedImage;
  bool _aceitouPoliticas = false;

  /// Método para tratar a seleção da imagem
  void _handleImagePicked(File? image) {
    setState(() {
      _selectedImage = image;
    });
  }

  /// Exibe mensagens baseadas em ações
  void _showMessage(String title, String message, VoidCallback onPressed) {
    mostrarMensagemConfirmacao(
      context,
      () {
        onPressed();
      },
      title,
      message,
      'Fechar',
    );
  }

  void _voltarButton(String title, String message) {
    mostrarMensagemConfirmacao(
      context,
      () {
        Navigator.of(context).pop();
      },
      title,
      message,
      'voltar para a tela de login',
    );
  }

  /// Valida e cadastra o usuário
  void _cadastrar(BuildContext context) async {
    if (!_aceitouPoliticas) {
      _showMessage(
        'Políticas de Segurança',
        'Você precisa aceitar as políticas de segurança para continuar.',
        () {},
      );
      return;
    }

    final viewModel = context.read<CadastroUsuarioViewModel>();

    try {
      final usuario = UsuarioCriarModel(
        cpf: _cpfController.text,
        dataNascimento: _dataNascimentoController.text,
        foto: _selectedImage,
        endereco: _enderecoController.text,
        nome: _nomeController.text,
        email: _emailController.text,
        senha: _senhaController.text,
        telefone: _telefoneController.text,
      );

      final success = await viewModel.cadastrarUsuario(usuario);

      if (success) {
        _showMessage(
          'Cadastro realizado!',
          viewModel.successMessage!,
          () {
            Navigator.of(context).pop();
          },
        );
      } else {
        _showMessage(
          'Algo de errado',
          'Por favor, verifique os campos novamente.',
          () {},
        );
      }
    } catch (e) {
      _showMessage(
        'erro',
        'Não foi possível realizar o cadastro. Tente novamente mais tarde.',
        () {},
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<CadastroUsuarioViewModel>();

    return Scaffold(
      appBar: AppBar(
        backgroundColor: thirdColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: fivethColor),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: Scrollbar(
        child: SingleChildScrollView(
          child: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [primaryColor, thirdColor],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
            padding:
                const EdgeInsets.only(left: 43.0, right: 43.0, bottom: 43.0),
            child: Center(
              child: Form(
                key: _formKey,
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
                      txt_cor_fundo: fourthColor,
                      txt_cor_texto: fivethColor,
                      txt_botao: 'Escolha uma foto de perfil',
                    ),
                    SizedBox(height: 30),
                    CaixaDeTexto(
                      controller: _nomeController,
                      labelText: 'Nome:',
                      validator: Validators.validateRequired,
                    ),
                    SizedBox(height: 30),
                    InputSenha(
                      controller: _senhaController,
                      labelText: 'Senha:',
                      validator: Validators.validatePassword,
                      autoValidate: true,
                    ),
                    SizedBox(height: 30),
                    InputSenha(
                      controller: _senhaDeNovoController,
                      labelText: 'Digite novamente a sua senha:',
                      validator: (value) =>
                          Validators.validatePasswordConfirmation(
                        value,
                        _senhaController.text,
                      ),
                      autoValidate: true,
                    ),
                    SizedBox(height: 30),
                    InputDate(
                      controller: _dataNascimentoController,
                      labelText: 'Data de nascimento:',
                    ),
                    SizedBox(height: 30),
                    CaixaDeTexto(
                      controller: _emailController,
                      labelText: 'Email:',
                      validator: Validators.validateEmail,
                      autoValidate: true,
                    ),
                    SizedBox(height: 30),
                    CaixaDeTexto(
                      controller: _telefoneController,
                      labelText: 'Telefone:',
                      validator: Validators.validatePhoneNumber,
                      autoValidate: true,
                    ),
                    SizedBox(height: 30),
                    CaixaDeTexto(
                      controller: _enderecoController,
                      labelText: 'Endereço:',
                      validator: Validators.validateRequired,
                    ),
                    SizedBox(height: 30),
                    CaixaDeTexto(
                      controller: _cpfController,
                      labelText: 'CPF:',
                      validator: Validators.validateCpf,
                      autoValidate: true,
                    ),
                    SizedBox(height: 30),
                    Row(
                      children: [
                        Checkbox(
                          value: _aceitouPoliticas,
                          onChanged: (value) {
                            setState(() {
                              _aceitouPoliticas = value ?? false;
                            });
                          },
                        ),
                        Text(
                          'Aceito as ',
                          style: TextStyle(
                              fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 15),
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
                              color: secondaryColor,
                            ),
                          ),
                        ),
                      ],
                    ),
                    BtnPreto(
                      onPressed: () => _cadastrar(context),
                      labelText: 'Cadastrar!',
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
