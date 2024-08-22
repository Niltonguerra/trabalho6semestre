// lib/widgets/BtnPreto.dart
import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class BtnPreto extends StatelessWidget {
  final VoidCallback onPressed; // Usar uma função para ser chamada quando o botão for pressionado
  final String labelText;

  BtnPreto({
    required this.onPressed,
    required this.labelText,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(
        labelText,
        style: TextStyle(
          fontFamily: FontRes.INTER_REGULAR,
        ),
      ),
      style: ElevatedButton.styleFrom(
        foregroundColor: fivethColor,
        backgroundColor: fourthColor,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12.0),
        ),
        minimumSize: Size(168, 36),
      ),
    );
  }
}
