// lib/widgets/BtnPreto.dart
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CardPersonalizado extends StatelessWidget {
  final VoidCallback onPressed; // Usar uma função para ser chamada quando o botão for pressionado
  final String txt_destino;
  final String txt_vagas;
  final String txt_horarioPartida;
  final String txt_preco;
  final Color txt_cor_fundo;
  final Color txt_cor_sombra1;
  final Color txt_cor_sombra2;

  CardPersonalizado({
    required this.onPressed,
    required this.txt_destino,
    required this.txt_vagas,
    required this.txt_horarioPartida,
    required this.txt_preco,
    required this.txt_cor_fundo,
    required this.txt_cor_sombra1,
    required this.txt_cor_sombra2,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: txt_cor_sombra2.withOpacity(0.5),
            offset: Offset(2, 2), // Deslocamento da sombra (x: direita, y: baixo)
            blurRadius: 6, // Desfoque da sombra
            spreadRadius: 1, // Espalhamento da sombra
          ),
          BoxShadow(
            color: txt_cor_sombra1.withOpacity(0.5),
            offset: Offset(-2, -2), // Deslocamento da sombra para o outro lado
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
        child: InkWell(
          onTap: onPressed,
          child: Padding(
            padding: const EdgeInsets.all(15.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  txt_destino,
                  style: TextStyle(
                    fontSize: 15,
                    fontFamily:FontRes.ROBOTO_REGULAR,
                  ),
                ),
                SizedBox(height: 30),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      txt_vagas,
                      style: TextStyle(
                        fontSize: 15,
                        fontFamily:FontRes.ROBOTO_REGULAR,
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        SvgPicture.asset(
                          'assets/images/alarm-outline.svg', // Verifique o caminho e o nome do arquivo SVG
                          width: 24,
                          height: 24,
                          fit: BoxFit.cover,
                        ),
                        SizedBox(width: 5),
                        Text(
                          txt_horarioPartida,
                          style: TextStyle(
                            fontSize: 15,
                            fontFamily:FontRes.ROBOTO_REGULAR,
                          ),
                        ),
                      ],
                    ),
                    Text(
                      txt_preco,
                      style: TextStyle(
                        fontSize: 15,
                        fontFamily:FontRes.ROBOTO_REGULAR,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
