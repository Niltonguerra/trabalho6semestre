import 'package:mobile/res/font_res.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/variables/colors.dart';


class SearchFieldWidget extends StatelessWidget {
  final Function(String) onChanged;
  final String initialQuery;
  final double scrollOffset;

  SearchFieldWidget({
    required this.onChanged,
    required this.initialQuery,
    required this.scrollOffset,
  });

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0,
      left: 0,
      right: 0,
      child: AnimatedOpacity(
        opacity: scrollOffset > 50 ? 0.0 : 1.0, 
        duration: Duration(milliseconds: 300),
        child: Container(
          color: Colors.transparent,
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                'VIAGENS DISPONIVEIS',
                style: TextStyle(
                  fontSize: 24,
                  fontFamily: FontRes.INTER_REGULAR,
                  color: fourthColor,
                ),
              ),
              SizedBox(height: 16),
              TextField(
                onChanged: onChanged,
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
    );
  }
}
