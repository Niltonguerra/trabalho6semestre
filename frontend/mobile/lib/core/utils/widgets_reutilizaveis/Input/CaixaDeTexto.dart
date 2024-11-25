import 'package:flutter/material.dart';
import 'package:flutter_masked_text2/flutter_masked_text2.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CaixaDeTexto extends StatefulWidget {
  final TextEditingController controller;
  final String labelText;
  final MaskedTextController? maskedController; // Permite usar máscaras opcionais
  final String? Function(String?)? validator; // Função de validação personalizada
  final bool autoValidate; // Define se a validação deve ser automática

  CaixaDeTexto({
    required this.controller,
    required this.labelText,
    this.maskedController,
    this.validator,
    this.autoValidate = false, // Validação automática desabilitada por padrão
  });

  @override
  _CaixaDeTextoState createState() => _CaixaDeTextoState();
}

class _CaixaDeTextoState extends State<CaixaDeTexto> {
  String? _errorText; // Armazena a mensagem de erro atual
  final FocusNode _focusNode = FocusNode(); // Para monitorar o foco do campo

  @override
  void initState() {
    super.initState();
    _focusNode.addListener(() {
      if (!_focusNode.hasFocus) {
        _validate(widget.controller.text); // Valida ao perder o foco
      }
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

  void _validate(String? value) {
    setState(() {
      if (widget.validator != null) {
        _errorText = widget.validator!(value); // Executa a validação e atualiza o erro
      }
    });
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
          controller: widget.maskedController ?? widget.controller,
          focusNode: _focusNode,
          onChanged: widget.autoValidate ? _validate : null, // Valida automaticamente, se habilitado
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
            errorText: _errorText, 
            errorStyle: TextStyle(
              color: fourthColor, // Muda a cor do texto de erro
              fontFamily: FontRes.ROBOTO_REGULAR,
              fontSize: 14, // Altere o tamanho do texto, se necessário
            ),
          ),
          style: TextStyle(
            color: fivethColor,
          ),
          onEditingComplete: () => _validate(widget.controller.text), // Valida ao terminar de editar
        ),
      ],
    );
  }
}
