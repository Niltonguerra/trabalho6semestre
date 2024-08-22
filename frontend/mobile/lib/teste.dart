import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';

class TestePage extends StatefulWidget {
  @override
  _TestePageState createState() => _TestePageState();
}

class _TestePageState extends State<TestePage> {

  final List<String> items = List.generate(7, (index) => 'Item $index');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        iconTheme: IconThemeData(
          color: primaryColor, // Defina a cor que você deseja para a seta de voltar
        ),
        title: Text('tela de teste', style: TextStyle(color: fourthColor)),
        backgroundColor: fivethColor,
      ),



      body: ListView.builder(
        itemCount: items.length,
        itemBuilder: (context, index) {
          return Card(
            margin: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(Icons.star, color: primaryColor),
                      SizedBox(width: 10),
                      Text(
                        items[index],
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Subtítulo: Página inicial',
                    style: TextStyle(fontSize: 16, color: Colors.grey[700]),
                  ),
                  SizedBox(height: 5),
                  Text(
                    'Descrição: Esta é uma descrição adicional para o ${items[index]}.',
                    style: TextStyle(fontSize: 14),
                  ),
                  SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        onPressed: () {
                          print('Ação 1 para ${items[index]}');
                        },
                        child: Text('Ação 1', style: TextStyle(color: primaryColor)),
                      ),
                      SizedBox(width: 10),
                      TextButton(
                        onPressed: () {
                          print('Ação 2 para ${items[index]}');
                        },
                        child: Text('Ação 2', style: TextStyle(color: primaryColor)),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
