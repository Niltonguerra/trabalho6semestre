import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/res/font_res.dart';

class ImagePickerWidget extends StatefulWidget {
  final void Function(File?) onImagePicked;
  final String txt_botao;
  final Color txt_cor_fundo;
  final Color txt_cor_texto;

  ImagePickerWidget({
    required this.onImagePicked,
    required this.txt_botao,
    required this.txt_cor_fundo,
    required this.txt_cor_texto,
  });

  @override
  _ImagePickerWidgetState createState() => _ImagePickerWidgetState();
}

class _ImagePickerWidgetState extends State<ImagePickerWidget> {
  File? _image;
  final ImagePicker _picker = ImagePicker();

  Future<void> _pickImage() async {
    final pickedFile = await _picker.pickImage(source: ImageSource.gallery);

    if (pickedFile != null) {
      setState(() {
        _image = File(pickedFile.path);
      });
      widget.onImagePicked(_image); // Chama o callback com a imagem selecionada
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        _image != null
            ? Center(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(500.0), // Ajuste o raio aqui
            child: Image.file(
              _image!,
              width: 200,
              height: 200,
              fit: BoxFit.cover,
            ),
          ),
        )
            :  SizedBox(height: 30),
        SizedBox(height: 20),
        SizedBox(
          width: double.infinity,
          child: ElevatedButton(
            onPressed: _pickImage,
            child: Text(
              widget.txt_botao,
              style: TextStyle(
                fontFamily: FontRes.INTER_REGULAR,
                fontSize: 20,
              ),
            ),
            style: ElevatedButton.styleFrom(
              foregroundColor: widget.txt_cor_texto,
              backgroundColor: widget.txt_cor_fundo,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12.0),
              ),
              minimumSize: Size(50, 60),
            ),
          ),
        ),


      ],
    );
  }
}
