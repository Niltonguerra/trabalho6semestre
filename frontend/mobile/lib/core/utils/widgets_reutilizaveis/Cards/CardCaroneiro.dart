// lib/widgets/CardPersonalizado.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CardCaroneiro extends StatelessWidget {
  // Usar uma função para ser chamada quando o botão for pressionado
  final String image;
  final String txt_nome_caroneiro;
  final String txt_avaliacao;
  final String? txt_telefone; // Tornando opcional
  final String? txt_email; // Tornando opcional
  final Color txt_cor_fundo;
  final Color txt_cor_sombra1;
  final Color txt_cor_sombra2;

  CardCaroneiro({
    required this.image,
    required this.txt_nome_caroneiro,
    required this.txt_avaliacao,
    this.txt_telefone, // Parâmetro opcional
    this.txt_email, // Parâmetro opcional
    required this.txt_cor_fundo,
    required this.txt_cor_sombra1,
    required this.txt_cor_sombra2,
  });

  @override
  Widget build(BuildContext context) {
    // Verifica se as informações de contato estão presentes
    bool hasContactInfo = txt_telefone != null || txt_email != null;

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
        color: fivethColor,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center, // Centraliza o conteúdo
            children: [
              Text(
                'Caroneiro',
                style: TextStyle(
                  fontSize: 25,
                  fontFamily: FontRes.INTER_REGULAR,
                ),
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center, // Centraliza o conteúdo da linha
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center, // Centraliza o conteúdo da coluna
                      children: [
                        // Container para limitar a largura do texto
                        Container(
                          constraints: BoxConstraints(
                            maxWidth: MediaQuery.of(context).size.width / 2, // Limite para a metade da tela
                          ),
                          child: Text(
                            txt_nome_caroneiro,
                            style: TextStyle(
                              fontSize: 25,
                              fontFamily: FontRes.ROBOTO_REGULAR,
                            ),
                          ),
                        ),
                        SizedBox(height: 15),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start, // Alinha a linha de estrelas e avaliação
                          children: [
                            Icon(Icons.star, color: Colors.yellow, size: 35),
                            SizedBox(width: 5),
                            Text(
                              txt_avaliacao,
                              style: TextStyle(
                                fontSize: 25,
                                fontFamily: FontRes.INTER_REGULAR,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: 15),
                  Image.asset(image, width: 150),
                ],
              ),
              if (hasContactInfo) // Renderiza somente se pelo menos um dos valores for não nulo
                SizedBox(height: 20),
              if (hasContactInfo)
                Align(
                  alignment: Alignment.centerLeft, // Alinha o conteúdo à esquerda
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Contato:',
                        style: TextStyle(
                          fontSize: 18,
                          fontFamily: FontRes.INTER_REGULAR,
                        ),
                      ),
                      SizedBox(height: 8),
                      if (txt_telefone != null) // Verifica se o telefone é não nulo antes de exibir
                        Text(
                          'telefone: ' + txt_telefone!,
                          style: TextStyle(
                            fontSize: 15,
                            fontFamily: FontRes.ROBOTO_REGULAR,
                          ),
                        ),
                      if (txt_email != null) // Verifica se o e-mail é não nulo antes de exibir
                        Text(
                          'email: '+txt_email!,
                          style: TextStyle(
                            fontSize: 15,
                            fontFamily: FontRes.ROBOTO_REGULAR,
                          ),
                        ),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
