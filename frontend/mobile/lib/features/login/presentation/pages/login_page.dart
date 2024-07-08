// lib/second_screen.dart

import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Second Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'This is the second screen!',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
             ElevatedButton(
              onPressed: () {
                // Navegar para a segunda tela quando o botão for pressionado
                Navigator.pushNamed(context, '/second');
              },
              child: Text('Go to Second Screen'),
            ),
          ],
        ),
      ),
    );
  }
}
