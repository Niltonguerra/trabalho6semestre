import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardPersonalizado.dart';
import 'package:mobile/res/font_res.dart';

class PesquisaHistoricoPage extends StatefulWidget {
  @override
  _PesquisaHistoricoPageState createState() => _PesquisaHistoricoPageState();
}

class _PesquisaHistoricoPageState extends State<PesquisaHistoricoPage> {
  final List<String> items = List.generate(7, (index) => 'Item $index');
  double _scrollOffset = 0.0;
  String _searchQuery = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: secondaryColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: fivethColor),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Text('Nome do usuario', style: TextStyle(color: fivethColor)),
            SizedBox(width: 10),
            Icon(Icons.person, color: fivethColor,size: 40,),

          ],
        ),
      ),

      body: NotificationListener<ScrollNotification>(
        onNotification: (ScrollNotification scrollInfo) {
          if (scrollInfo is ScrollUpdateNotification) {
            setState(() {
              _scrollOffset = scrollInfo.metrics.pixels;
            });
          }
          return true;
        },
        child: Stack(
          children: [
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [thirdColor, primaryColor,secondaryColor],
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                ),
              ),
              child: ListView.builder(
                padding: EdgeInsets.only(top: 160), // Ajuste o padding superior para deixar espaço para o título e a barra de pesquisa
                itemCount: items.length,
                itemBuilder: (context, index) {
                  final item = items[index];
                  if (_searchQuery.isEmpty || item.toLowerCase().contains(_searchQuery.toLowerCase())) {
                    return CardPersonalizado(
                      onPressed: () {
                        Navigator.pushNamed(context, '/politicaSeguranca');
                      },
                      txt_destino: 'Rua Ulisses Guimarães, 212, Jardim Rosas, Francisco Morato, SP, São Paulo, Brasil',
                      txt_vagas: 'Vagas: 3',
                      txt_horarioPartida: '7:00',
                      txt_preco: 'R\$ 11,99',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: primaryColor,
                      txt_cor_sombra2: fourthColor,
                    );
                  }
                  return SizedBox.shrink(); // Retorna um espaço vazio se o item não corresponder à pesquisa
                },
              ),
            ),
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: AnimatedOpacity(
                opacity: _scrollOffset > 50 ? 0.0 : 1.0, // Ajuste o valor conforme necessário
                duration: Duration(milliseconds: 300),
                child: Container(
                  color: Colors.transparent,
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        'HISTÓRICO DE VIAGENS ',
                        style: TextStyle(
                          fontSize: 24,
                          fontFamily: FontRes.INTER_REGULAR,
                          color: fourthColor,
                        ),
                      ),
                      SizedBox(height: 16),
                      TextField(
                        onChanged: (query) {
                          setState(() {
                            _searchQuery = query;
                          });
                        },
                        decoration: InputDecoration(
                          hintText: 'Buscar...',
                          suffixIcon: Icon(Icons.search),
                          filled: true,
                          fillColor: Colors.white,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(250),
                            borderSide: BorderSide.none,
                          ),
                          contentPadding: EdgeInsets.symmetric(horizontal: 16),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
