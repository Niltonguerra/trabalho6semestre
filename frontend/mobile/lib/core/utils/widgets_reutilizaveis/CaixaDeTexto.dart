// lib/widgets/CaixaDeTexto.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CaixaDeTexto extends StatelessWidget {
  final TextEditingController controller;
  final String labelText;

  CaixaDeTexto({
    required this.controller,
    required this.labelText,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start, // Alinha todos os widgets à esquerda
      children: <Widget>[
        Text(
          labelText,
          style: TextStyle(fontFamily: FontRes.ROBOTO_REGULAR, fontSize: 20), // Altere conforme necessário
        ),
        SizedBox(height: 12), // Espaço vertical entre o texto e o campo de entrada

        TextField(
          controller: controller,
          decoration: InputDecoration(
            border: OutlineInputBorder(),
            filled: true, // Habilita a cor de fundo
            fillColor: secondaryColor,
            contentPadding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0), // Ajusta o padding interno
          ),
          keyboardType: TextInputType.text,
        ),
      ],
    );
  }
}
