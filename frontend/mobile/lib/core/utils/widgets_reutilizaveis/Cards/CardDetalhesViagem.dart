import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CardDetalhesViagem extends StatelessWidget {
  final String txt_ponto_encontro;
  final String txt_ponto_destino;
  final String txt_vagas_disponiveis;
  final String txt_horario_partida;
  final String txt_horario_chegada;
  final String txt_preco_carona;
  final Color txt_cor_fundo;
  final Color txt_cor_sombra1;
  final Color txt_cor_sombra2;

  CardDetalhesViagem({
    required this.txt_ponto_encontro,
    required this.txt_ponto_destino,
    required this.txt_vagas_disponiveis,
    required this.txt_horario_partida,
    required this.txt_horario_chegada,
    required this.txt_preco_carona,
    required this.txt_cor_fundo,
    required this.txt_cor_sombra1,
    required this.txt_cor_sombra2,
  });

  TextStyle _getTextStyle(double fontSize, String fontFamily) {
    return TextStyle(
      fontSize: fontSize,
      fontFamily: fontFamily,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: txt_cor_sombra1.withOpacity(0.5),
            offset: Offset(2, 2),
            blurRadius: 6,
            spreadRadius: 1,
          ),
          BoxShadow(
            color: txt_cor_sombra2.withOpacity(0.5),
            offset: Offset(-2, -2),
            blurRadius: 6,
            spreadRadius: 1,
          ),
        ],
      ),
      child: Card(
        color: txt_cor_fundo,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                'Detalhes da Viagem',
                style: _getTextStyle(25, FontRes.INTER_REGULAR),
              ),
              SizedBox(height: 15),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Ponto de encontro:\n${txt_ponto_encontro}',
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Destino:\n${txt_ponto_destino}',
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),
                ],
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Text(
                      'Vagas ainda disponíveis:',
                      style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                    ),
                  ),
                  Text(
                    txt_vagas_disponiveis,
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),
                ],
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [

                  Text(
                    'horário de partida:',
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),

                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        txt_horario_partida,
                        style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                      ),
                      SizedBox(width: 5),
                      Icon(Icons.access_time, size: 20, color: Colors.black),
                    ],
                  ),
                ],
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [

                  Text(
                    'horário de chegada previsto:',
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),

                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        txt_horario_chegada,
                        style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                      ),
                      SizedBox(width: 5),
                      Icon(Icons.access_time, size: 20, color: Colors.black),
                    ],
                  ),
                ],
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Text(
                      'preço da carona:',
                      style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                    ),
                  ),
                  Text(
                    'R\$ ' + txt_preco_carona,
                    style: _getTextStyle(15, FontRes.ROBOTO_REGULAR),
                  ),
                ],
              ),
              SizedBox(height: 5),
            ],
          ),
        ),
      ),
    );
  }
}