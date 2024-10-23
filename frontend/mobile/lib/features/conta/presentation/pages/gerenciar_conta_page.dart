import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnGrande.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCarro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardDetalhesUsuario.dart';
import 'package:mobile/res/font_res.dart';

class GerenciarContaPage extends StatefulWidget {
  @override
  _GerenciarContaPageState createState() => _GerenciarContaPageState();
}

class _GerenciarContaPageState extends State<GerenciarContaPage> {

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
          icon: Icon(Icons.arrow_back, color: thirdColor),
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
                colors: [thirdColor,secondaryColor],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),

            child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,

                  children: [

                    Text(
                      'Gerenciar Perfil!',
                      style: TextStyle(
                        fontSize: 36,
                        color: fourthColor,
                        fontFamily: FontRes.INTER_REGULAR,
                      ),
                    ),
                    SizedBox(height: 15),


                    Image.asset('assets/images/user.png', width: 180),

                    SizedBox(height: 30),


                    CardDetalhesUsuario(
                      txt_nome: "Nome",
                      txt_idade: "Idade",
                      txt_avaliacao_como_cliente: "5.0",
                      // txt_avaliacao_como_prestador: "4.4",
                      txt_endereco: "Endereço",
                      txt_email: "Email",
                      txt_telefone: "Telefone",
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                      onPressed: _cadastrar,
                      txt_cor_fundo_btn: secondaryColor,
                      txt_cor_texto_btn: fivethColor,
                      txt_texto_btn: 'Editar',
                    ),


                    SizedBox(height: 50),

                    CardCarro(
                      image: 'assets/images/car.png',
                      txt_modelo_carro: 'Nome do Caroneiro',
                      txt_ano_carro: '2015',
                      txt_cor_carro: 'Azul',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                      txt_placa_carro: 'j213-312',
                      onPressed: _cadastrar,
                      txt_cor_fundo_btn: secondaryColor,
                      txt_cor_texto_btn: fivethColor,
                      txt_texto_btn: 'Editar',
                    ),


                    SizedBox(height: 100),
                    BtnGrande(
                        onPressed: _cadastrar,
                        txt_botao: 'Visualizar histórico',
                        txt_cor_fundo: primaryColor,
                        txt_cor_texto: fivethColor
                    ),
                    SizedBox(height: 15),
                    BtnGrande(
                        onPressed: _cadastrar,
                        txt_botao: 'Tornar-se um prestador',
                        txt_cor_fundo: primaryColor,
                        txt_cor_texto: fivethColor
                    ),
                    SizedBox(height: 15),
                    BtnGrande(
                        onPressed: _cadastrar,
                        txt_botao: 'Excluir conta',
                        txt_cor_fundo: primaryColor,
                        txt_cor_texto: fivethColor
                    ),
                    SizedBox(height: 15),
                  ],
                )
            ),
          ),
        ),
      ),
    );
  }
}
