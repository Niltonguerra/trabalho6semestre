import 'package:flutter/material.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class User {
  final String id;
  final String name;
  final String avatarUrl;

  User({required this.id, required this.name, required this.avatarUrl});
}

class UserListChatPage extends StatelessWidget {
  final List<User> users = [
    User(id: '1', name: 'Alice', avatarUrl: 'https://example.com/avatar1.png'),
    User(id: '2', name: 'Bob', avatarUrl: 'https://example.com/avatar2.png'),
    User(id: '3', name: 'Charlie', avatarUrl: 'https://example.com/avatar3.png'),
    // Adicione mais usuários conforme necessário
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: thirdColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: fivethColor),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: Text(
            'Conversas',
          style: TextStyle(
            fontSize: 24,
            fontFamily: FontRes.INTER_REGULAR,
            color:  fivethColor,
          ),
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [thirdColor, primaryColor, secondaryColor],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: ListView.builder(
          itemCount: users.length,
          itemBuilder: (context, index) {
            final user = users[index];
            return Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              child: Card(
                elevation: 4,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                child: ListTile(
                  contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                  leading: CircleAvatar(
                    radius: 25,
                    backgroundImage: NetworkImage(user.avatarUrl),
                    backgroundColor: Colors.grey[200],
                    child: Container(
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: thirdColor, width: 2),
                      ),
                    ),
                  ),
                  title: Text(
                    user.name,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                      color: fourthColor,
                    ),
                  ),
                  trailing: Icon(
                    Icons.arrow_forward_ios,
                    color: thirdColor,
                    size: 16,
                  ),
                  onTap: () {
                    // Ação ao clicar no usuário
                    // Por exemplo, navegue para uma página de detalhes do usuário
                  },
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
