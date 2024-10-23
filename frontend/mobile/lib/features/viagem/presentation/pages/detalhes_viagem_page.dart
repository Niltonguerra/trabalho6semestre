import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnGrande.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCaroneiro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCarro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardDetalhesViagem.dart';

class DetalhesViagemPage extends StatefulWidget {
  @override
  _DetalhesViagemPageState createState() => _DetalhesViagemPageState();
}

class _DetalhesViagemPageState extends State<DetalhesViagemPage> {

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
                    CardCaroneiro(
                      image: 'assets/images/user.png',
                      txt_nome_caroneiro: 'Nome do Caroneiro',
                      txt_avaliacao: '4.5',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                      txt_email: 'teste@gmail.com',
                      txt_telefone: '11 99999-9999',
                    ),
                    SizedBox(height: 15),
                    CardCarro(
                      image: 'assets/images/car.png',
                      txt_modelo_carro: 'Nome do Caroneiro',
                      txt_ano_carro: '2015',
                      txt_cor_carro: 'Azul',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                      txt_placa_carro: 'j213-312',
                    ),
                    SizedBox(height: 15),
                    CardDetalhesViagem(
                      txt_ponto_encontro: 'Rua Ulisses Guimarães,212, Jardim Rosas, Francisco Morato, SP, São Paulo, Brasil',
                      txt_ponto_destino: 'Rua Ulisses Guimarães,212, Jardim Rosas, Francisco Morato, SP, São Paulo, Brasil',
                      txt_vagas_disponiveis: '2',
                      txt_horario_partida: '12:00',
                      txt_horario_chegada: '13:00',
                      txt_preco_carona: '11,00',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                    ),
                    SizedBox(height: 15),
                    BtnGrande(
                        onPressed: _cadastrar,
                        txt_botao: 'Quero a Carona!',
                        txt_cor_fundo: secondaryColor,
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
