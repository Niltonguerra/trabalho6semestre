import 'package:flutter/material.dart';
import 'package:flutter_chat_ui/flutter_chat_ui.dart';
import 'package:flutter_chat_types/flutter_chat_types.dart' as types;

class ChatPage extends StatefulWidget {
  @override
  _ChatPageState createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {


  final List<types.Message> messages = [
    types.TextMessage(
      author: types.User(id: '1', firstName: 'Alice'),
      createdAt: DateTime.now().millisecondsSinceEpoch,
      id: '1',
      text: 'Olá! Bob',
    ),
    types.TextMessage(
      author: types.User(id: '2', firstName: 'Bob'),
      createdAt: DateTime.now().millisecondsSinceEpoch,
      id: '2',
      text: 'Oi, Alice!',
    ),
  ];



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Chat(
        messages: messages,
        onSendPressed: (message) {
          // Handle sending message
        },
        user: types.User(id: '2', firstName: 'Alice'),
      ),


    );
  }


}
