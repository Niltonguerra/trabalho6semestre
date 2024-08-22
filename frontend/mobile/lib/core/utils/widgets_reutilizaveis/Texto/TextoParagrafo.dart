// lib/widgets/CaixaDeTexto.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class TextoParagrafo extends StatelessWidget {
  final String labelText;

  TextoParagrafo({
    required this.labelText,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start, // Alinha todos os widgets à esquerda
      children: <Widget>[
        Text(
          labelText,
          style: TextStyle(
            fontSize: 18,
            fontFamily: FontRes.ROBOTO_REGULAR,
            color:  fivethColor,
          ),
        ),
        SizedBox(height: 20),
      ],
    );
  }
}
