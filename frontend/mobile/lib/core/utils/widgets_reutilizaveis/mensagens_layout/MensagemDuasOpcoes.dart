import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class MensagemDuasOpcoes extends StatelessWidget {
  final VoidCallback onPressedBtn1; // Função chamada quando o primeiro botão é pressionado
  final VoidCallback onPressedBtn2; // Função chamada quando o segundo botão é pressionado
  final String titulo;
  final String mensagem;
  final String btnTexto1;
  final String btnTexto2;

  MensagemDuasOpcoes({
    required this.onPressedBtn1,
    required this.onPressedBtn2,
    required this.titulo,
    required this.mensagem,
    required this.btnTexto1,
    required this.btnTexto2,
  });

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: secondaryColor,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20),
      ),
      title: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.asset(
            'assets/images/icone-carro-mensagem.png',
            width: 70,
            height: 70,
          ),
          SizedBox(width: 20),
          Expanded(
            child: Text(
              titulo,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 24,
                color: fivethColor,
                fontFamily: FontRes.INTER_REGULAR,
              ),
            ),
          ),
        ],
      ),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(height: 20),
          Text(
            mensagem,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
              color: fivethColor,
              fontFamily: FontRes.ROBOTO_REGULAR,
            ),
          ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop(); // Fecha o diálogo
                  onPressedBtn1(); // Executa a função passada como callback
                },
                child: Text(
                  btnTexto1,
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
                  minimumSize: Size(100, 36),
                ),
              ),
              SizedBox(width: 20),
              ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop(); // Fecha o diálogo
                  onPressedBtn2(); // Executa a função passada como callback
                },
                child: Text(
                  btnTexto2,
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
                  minimumSize: Size(100, 36),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

// Função para mostrar o diálogo
void mostrarMensagemDuasOpcoes(BuildContext context, VoidCallback onPressedBtn1, VoidCallback onPressedBtn2, String titulo, String mensagem, String btnTexto1, String btnTexto2) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return MensagemDuasOpcoes(
        onPressedBtn1: () {
          Navigator.of(context).pop(); // Fecha o diálogo
          onPressedBtn1(); // Executa a função passada como callback
        },
        onPressedBtn2: () {
          Navigator.of(context).pop(); // Fecha o diálogo
          onPressedBtn2(); // Executa a função passada como callback
        },
        titulo: titulo,
        mensagem: mensagem,
        btnTexto1: btnTexto1,
        btnTexto2: btnTexto2,
      );
    },
  );
}
