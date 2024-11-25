import 'package:flutter/material.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/res/font_res.dart';
import 'package:intl/intl.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

class InputDate extends StatefulWidget {
  final TextEditingController controller;
  final String labelText;

  InputDate({
    required this.controller,
    required this.labelText,
  });

  @override
  _InputDateState createState() => _InputDateState();
}

class _InputDateState extends State<InputDate> {
  void _selectDate(BuildContext context) async {
    DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
      locale: const Locale('pt', 'BR'), // Define o idioma para português (Brasil)
      builder: (BuildContext context, Widget? child) {
        return Theme(
          data: ThemeData.light().copyWith(
            primaryColor: secondaryColor,
            colorScheme: ColorScheme.light(primary: secondaryColor),
            buttonTheme: ButtonThemeData(textTheme: ButtonTextTheme.primary),
          ),
          child: child ?? SizedBox.shrink(),
        );
      },
    );

    if (pickedDate != null) {
      String formattedDate = DateFormat('dd/MM/yyyy').format(pickedDate);
      widget.controller.text = formattedDate;
    }
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
          controller: widget.controller,
          readOnly: true, // Impede edição manual
          onTap: () => _selectDate(context), // Abre o seletor de data ao tocar
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
            suffixIcon: Icon(Icons.calendar_today, color: fivethColor),
          ),
          style: TextStyle(
            color: fivethColor,
          ),
        ),
      ],
    );
  }
}
