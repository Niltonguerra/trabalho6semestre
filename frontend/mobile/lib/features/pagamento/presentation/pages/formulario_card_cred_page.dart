import 'package:flutter/material.dart';
import 'package:flutter_credit_card/flutter_credit_card.dart';
import 'package:flutter_credit_card/credit_card_brand.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnPreto.dart';
import 'package:mobile/res/font_res.dart';

class CreditCardFormPage extends StatefulWidget {
  @override
  _CreditCardFormPageState createState() => _CreditCardFormPageState();
}

class _CreditCardFormPageState extends State<CreditCardFormPage> {
  String cardNumber = '';
  String expiryDate = '';
  String cardHolderName = '';
  String cvvCode = '';
  bool isCvvFocused = false;

  final GlobalKey<FormState> formKey = GlobalKey<FormState>();


  void _cadastrar() async {
    // final result = await loginUseCase(
    //   email: _emailController.text,
    //   password: _senhaController.text,
    // );
    //
    // print('Email: ${_emailController.text}'); // Corrigido para imprimir o email
    //
    // if (result) {
    //   Navigator.pushNamed(context, '/second');
    // } else {
    //   showErrorDialog(context, 'Falha no cadastro. Verifique suas informações.');
    // }

    if (formKey.currentState!.validate()) {
      // Ação ao salvar o formulário
      print('Cartão válido!');
      print('Nome do Titular: $cardHolderName'); // Imprime o nome no console
    } else {
      print('Por favor, preencha os campos corretamente.');
    }
  }





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
        title: Text(
          'Preencher Dados do Cartão',
          style: TextStyle(
            fontSize: 18,
            fontFamily: FontRes.INTER_REGULAR,
            color: fivethColor,
          ),
        ),
      ),



      body: SingleChildScrollView(

        child: Container(
          height: MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [secondaryColor, primaryColor],
              begin: Alignment.bottomCenter,
              end: Alignment.topCenter,
            ),
          ),
          padding: const EdgeInsets.all(16.0), // Adiciona padding ao redor do conteúdo
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch, // Garante que a coluna ocupe toda a largura
            children: [
              CreditCardWidget(
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardHolderName: cardHolderName,
                cvvCode: cvvCode,
                showBackView: isCvvFocused,
                onCreditCardWidgetChange: (CreditCardBrand creditCardBrand) {
                  // Ações relacionadas à mudança de bandeira do cartão (opcional)
                },
              ),

              CreditCardForm(
                formKey: formKey,
                themeColor: Colors.red,
                onCreditCardModelChange: (CreditCardModel data) {
                  setState(() {
                    cardNumber = data.cardNumber;
                    expiryDate = data.expiryDate;
                    cardHolderName = data.cardHolderName;
                    cvvCode = data.cvvCode;
                    isCvvFocused = data.isCvvFocused;
                  });
                },
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardHolderName: cardHolderName,
                cvvCode: cvvCode,
              ),
              SizedBox(height: 50),
              BtnPreto(
                  onPressed: _cadastrar,
                  labelText: 'Confirmar'
              ),
            ],
          ),
        ),
      ),
    );
  }
}
