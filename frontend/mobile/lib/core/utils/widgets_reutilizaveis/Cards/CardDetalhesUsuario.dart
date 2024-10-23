import 'package:flutter/material.dart';
import 'package:mobile/res/font_res.dart';

class CardDetalhesUsuario extends StatelessWidget {
  final String txt_nome;
  final String txt_idade;
  final String txt_avaliacao_como_cliente;
  final String? txt_avaliacao_como_prestador;
  final String txt_endereco;
  final String txt_email;
  final String txt_telefone;
  final Color txt_cor_fundo;
  final Color txt_cor_sombra1;
  final Color txt_cor_sombra2;
  final VoidCallback? onPressed;
  final Color? txt_cor_fundo_btn;
  final Color? txt_cor_texto_btn;
  final String? txt_texto_btn;

  CardDetalhesUsuario({
    required this.txt_nome,
    required this.txt_idade,
    required this.txt_avaliacao_como_cliente,
    this.txt_avaliacao_como_prestador,
    required this.txt_endereco,
    required this.txt_email,
    required this.txt_telefone,
    required this.txt_cor_fundo,
    required this.txt_cor_sombra1,
    required this.txt_cor_sombra2,
    this.onPressed,
    this.txt_cor_fundo_btn,
    this.txt_cor_texto_btn,
    this.txt_texto_btn,
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Informações da Conta:',
                style: _getTextStyle(25, FontRes.INTER_REGULAR),
              ),
              SizedBox(height: 15),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,

                children: [
                  Text(
                    'Nome:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Text(
                    txt_nome,
                    style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 15),

                  Text(
                    'Idade:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Text(
                    txt_idade,
                    style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 15),

                  Text(
                    'endereço:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Text(
                    txt_endereco,
                    style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 15),

                  Text(
                    'Email:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Text(
                    txt_email,
                    style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 15),
                  Text(
                    'Telefone:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Text(
                    txt_telefone,
                    style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                  ),
                  SizedBox(height: 15),

                  Text(
                    'Avaliação como cliente:',
                    style: _getTextStyle(20, FontRes.INTER_REGULAR),
                  ),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        txt_avaliacao_como_cliente,
                        style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                      ),
                      SizedBox(width: 5),
                      Icon(Icons.star, color: Colors.yellow, size: 30),
                    ],
                  ),

                  if (txt_avaliacao_como_prestador != null)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Avaliação como prestador:',
                          style: _getTextStyle(20, FontRes.INTER_REGULAR),
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              txt_avaliacao_como_prestador!,
                              style: _getTextStyle(20, FontRes.ROBOTO_REGULAR),
                            ),
                            SizedBox(width: 5),
                            Icon(Icons.star, color: Colors.yellow, size: 30),
                          ],
                        ),
                        SizedBox(height: 15),
                      ],
                    )
                  else
                    Text(''),



                  if (onPressed != null)
                    Column(
                      children: [
                        SizedBox(height: 15),
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton(
                            onPressed: onPressed,
                            child: Text(
                              txt_texto_btn!,
                              style: TextStyle(
                                fontFamily: FontRes.INTER_REGULAR,
                              ),
                            ),
                            style: ElevatedButton.styleFrom(
                              foregroundColor: txt_cor_texto_btn,
                              backgroundColor: txt_cor_fundo_btn,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12.0),
                              ),
                              minimumSize: Size(200, 50),
                            ),
                          ),
                        ),
                      ],
                    )
                  else
                    Container(),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}