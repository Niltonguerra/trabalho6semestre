import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class MensagemConfirmacao extends StatelessWidget {
  final VoidCallback onPressed; // Função chamada quando o botão for pressionado
  final String titulo;
  final String mensagem;
  final String btnTexto;

  const MensagemConfirmacao({
    Key? key,
    required this.onPressed,
    required this.titulo,
    required this.mensagem,
    required this.btnTexto,
  }) : super(key: key);

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
            style: TextStyle(
              fontSize: 20,
              color: fivethColor,
              fontFamily: FontRes.ROBOTO_REGULAR,
            ),
          ),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.of(context).pop(); // Fecha o diálogo quando o botão é pressionado
              onPressed();
            },
            child: Text(
              btnTexto,
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
          ),
        ],
      ),
    );
  }
}

// Função para mostrar o diálogo
void mostrarMensagemConfirmacao(BuildContext context, VoidCallback onPressed, String titulo, String mensagem, String btnTexto) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return MensagemConfirmacao(
        onPressed: onPressed,
        titulo: titulo,
        mensagem: mensagem,
        btnTexto: btnTexto,
      );
    },
  );
}
