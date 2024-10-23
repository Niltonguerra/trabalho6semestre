// lib/widgets/BtnGrande.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class BtnGrande extends StatelessWidget {
  final VoidCallback onPressed; // Usar uma função para ser chamada quando o botão for pressionado
  final String txt_botao;
  final Color txt_cor_fundo;
  final Color txt_cor_texto;
  BtnGrande({
    required this.onPressed,
    required this.txt_botao,
    required this.txt_cor_fundo,
    required this.txt_cor_texto,
  });

  @override
  Widget build(BuildContext context) {
    return
      SizedBox(
        width: double.infinity,
        child: ElevatedButton(
          onPressed: onPressed,
          child: Text(
            txt_botao,
            style: TextStyle(
              fontFamily: FontRes.INTER_REGULAR,
              fontSize: 20,
            ),
          ),
          style: ElevatedButton.styleFrom(
            foregroundColor: txt_cor_texto,
            backgroundColor: txt_cor_fundo,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12.0),
            ),
            minimumSize: Size(50, 60),
          ),
        ),
      );
  }
}
