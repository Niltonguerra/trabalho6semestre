import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class CardCarro extends StatelessWidget {
  // Usar uma função para ser chamada quando o botão for pressionado
  final String image;
  final String txt_modelo_carro;
  final String txt_cor_carro;
  final String txt_ano_carro;
  final String? txt_placa_carro; // Tornando opcional
  final Color txt_cor_fundo;
  final Color txt_cor_sombra1;
  final Color txt_cor_sombra2;
  final VoidCallback? onPressed;
  final Color? txt_cor_fundo_btn;
  final Color? txt_cor_texto_btn;
  final String? txt_texto_btn;

  CardCarro({
    required this.image,
    required this.txt_modelo_carro,
    required this.txt_cor_carro,
    this.txt_placa_carro,
    required this.txt_ano_carro,
    required this.txt_cor_fundo,
    required this.txt_cor_sombra1,
    required this.txt_cor_sombra2,
    this.onPressed,
    this.txt_cor_fundo_btn,
    this.txt_cor_texto_btn,
    this.txt_texto_btn,
  });

  @override
  Widget build(BuildContext context) {

    bool hasContactInfo = txt_placa_carro != null;

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: txt_cor_sombra1.withOpacity(0.5),
            offset: Offset(2, 2),
            blurRadius: 6,
            spreadRadius: 1,
          ),
          BoxShadow(
            color: txt_cor_sombra2.withOpacity(0.5),
            offset: Offset(-2, -2),
            blurRadius: 6,
            spreadRadius: 1,
          ),
        ],
      ),
      child: Card(
        color: fivethColor,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center, // Centraliza o conteúdo
            children: [
              Text(
                'Carro de transporte',
                style: TextStyle(
                  fontSize: 25,
                  fontFamily: FontRes.INTER_REGULAR,
                ),
              ),
              SizedBox(height: 15),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center, // Alinha o conteúdo horizontalmente ao centro
                mainAxisAlignment: MainAxisAlignment.center, // Centraliza o conteúdo da linha
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start, // Alinha o texto à esquerda dentro da coluna
                      children: [
                        // Container para limitar a largura do texto
                        Container(
                          constraints: BoxConstraints(
                            maxWidth: MediaQuery.of(context).size.width / 2, // Limite para a metade da tela
                          ),
                          child: Text(
                            txt_modelo_carro,
                            style: TextStyle(
                              fontSize: 25,
                              fontFamily: FontRes.ROBOTO_REGULAR,
                            ),
                          ),
                        ),
                        SizedBox(height: 20),
                        Text(
                          'Cor: ' + txt_cor_carro,
                          style: TextStyle(
                            fontSize: 18,
                            fontFamily: FontRes.ROBOTO_REGULAR,
                          ),
                        ),
                        SizedBox(height: 15),
                        Text(
                          'Ano: ' + txt_ano_carro,
                          style: TextStyle(
                            fontSize: 18,
                            fontFamily: FontRes.ROBOTO_REGULAR,
                          ),
                        ),
                        if (hasContactInfo) // Renderiza somente se pelo menos um dos valores for não nulo
                          SizedBox(height: 20),
                        if (hasContactInfo)
                          Align(
                            alignment: Alignment.centerLeft, // Alinha o conteúdo à esquerda
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                if (txt_placa_carro != null) // Verifica se o telefone é não nulo antes de exibir
                                  Text(
                                    'Placa:' + txt_placa_carro!,
                                    style: TextStyle(
                                      fontSize: 15,
                                      fontFamily: FontRes.ROBOTO_REGULAR,
                                    ),
                                  ),
                              ],
                            ),
                          ),
                      ],
                    ),
                  ),
                  SizedBox(width: 15),
                  Container(
                    width: 160,
                    height: 160,
                    decoration: BoxDecoration(
                      color: Colors.blue, // Cor de fundo azul
                      borderRadius: BorderRadius.circular(75), // Arredondamento total
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(75), // Arredondamento da imagem
                      child: Center(
                        child: Image.asset(
                          image,
                          height: 110, // Reduz o tamanho da imagem
                          fit: BoxFit.contain, // Mantém a imagem dentro do container, centralizada
                        ),
                      ),
                    ),
                  ),
                ],
              ),


              if (onPressed != null)
                Column(
                  children: [
                    SizedBox(height: 15),
                    SizedBox(
                      width: double.infinity,
                    child: ElevatedButton(
                      onPressed: onPressed,
                      child: Text(
                        txt_texto_btn!,
                        style: TextStyle(
                          fontFamily: FontRes.INTER_REGULAR,
                        ),
                      ),
                      style: ElevatedButton.styleFrom(
                        foregroundColor: txt_cor_texto_btn,
                        backgroundColor: txt_cor_fundo_btn,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                        minimumSize: Size(200, 50),
                      ),
                    ),
                    ),
                  ],
                )
              else
                Container(),

            ],
          ),
        ),
      ),
    );
  }
}
