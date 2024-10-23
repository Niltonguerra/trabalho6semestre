import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CardListaSimples extends StatelessWidget {
  // Usar uma função para ser chamada quando o botão for pressionado
  final String image;
  final Color txt_cor_fundo;
  final Color txt_cor_detalhes;
  final VoidCallback onPressed;
  final String txt_texto_principal;
  final Color txt_cor_fonte;

  CardListaSimples({
    required this.image,
    required this.txt_texto_principal,
    required this.txt_cor_fundo,
    required this.txt_cor_detalhes,
    required this.onPressed,
    required this.txt_cor_fonte,
  });

  @override
  Widget build(BuildContext context) {


    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10), // Define o arredondamento das bordas
      ),
      child: ListTile(
        contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),

        leading: CircleAvatar(
          radius: 30,
          backgroundColor: fivethColor,
          child: ClipOval(
            child: Image.asset(
              image,
              height: 45, // Altere o valor conforme necessário
              fit: BoxFit.cover,
            ),
          ),
        ),
        title: Text(
          txt_texto_principal,
          style: TextStyle(
            fontFamily: FontRes.INTER_REGULAR,
            fontSize: 16,
            color: txt_cor_fonte,
          ),
        ),
        trailing: Icon(
          Icons.arrow_forward_ios,
          color: txt_cor_detalhes,
          size: 16,
        ),
        onTap: () {
          onPressed();
        },
      ),
    );
  }
}
