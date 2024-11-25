import 'package:flutter/material.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class InputSenha extends StatefulWidget {
  final TextEditingController controller;
  final String labelText;
  final String? Function(String?)? validator; // Função de validação opcional
  final bool autoValidate; // Define se a validação deve ser automática

  InputSenha({
    required this.controller,
    required this.labelText,
    this.validator,
    this.autoValidate = false,
  });

  @override
  _InputSenhaState createState() => _InputSenhaState();
}

class _InputSenhaState extends State<InputSenha> {
  bool _obscureText = true;
  String? _errorText;

  void _togglePasswordVisibility() {
    setState(() {
      _obscureText = !_obscureText;
    });
  }

  void _validate(String? value) {
    if (widget.validator != null) {
      setState(() {
        _errorText = widget.validator!(value); // Chama o validador
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          widget.labelText,
          style: TextStyle(
            fontFamily: FontRes.ROBOTO_REGULAR,
            fontSize: 20,
          ),
        ),
        SizedBox(height: 12),
        TextField(
          controller: widget.controller,
          obscureText: _obscureText,
          onChanged: widget.autoValidate ? _validate : null,
          onEditingComplete: () => _validate(widget.controller.text),
          decoration: InputDecoration(
            filled: true,
            fillColor: secondaryColor,
            contentPadding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(5.0),
              borderSide: BorderSide.none,
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(5.0),
              borderSide: BorderSide.none,
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(5.0),
              borderSide: BorderSide.none,
            ),
            errorText: _errorText, // Exibe a mensagem de erro
            errorStyle: TextStyle(
              color: fourthColor, // Muda a cor do texto de erro
              fontFamily: FontRes.ROBOTO_REGULAR,
              fontSize: 14, // Altere o tamanho do texto, se necessário
            ),
            suffixIcon: IconButton(
              icon: Icon(
                _obscureText ? Icons.visibility_off : Icons.visibility,
                color: fivethColor,
              ),
              onPressed: _togglePasswordVisibility,
            ),
          ),
          style: TextStyle(
            color: fivethColor,
          ),
          keyboardType: TextInputType.visiblePassword,
        ),
      ],
    );
  }
}
