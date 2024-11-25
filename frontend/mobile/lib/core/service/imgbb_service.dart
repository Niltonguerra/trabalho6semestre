import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:dio/dio.dart';

class ImgbbService {
  final Dio client;

  ImgbbService({required this.client});

  final String _url = 'https://api.imgbb.com/1/upload';
  final String _apiKey = '676c0bd4e17dba1ee3c06b04c599f085';

  /// Envia uma imagem para o ImgBB e retorna os links gerados.
  Future<Map<String, dynamic>> uploadImage(File file) async {
    try {
      // Configura o FormData para envio da imagem
      // final Uint8List fileBytes = await file.readAsBytes();
      // final String base64Image = base64Encode(fileBytes);

      final formData = FormData.fromMap({
        'image': await MultipartFile.fromFile(
          file.path,
          filename: file.path.split('/').last, // Nome do arquivo
        ),
      });

      // final data = {
      //   'image': base64Image,
      // };
      // Constrói a URL com o parâmetro da chave da API
      final String urlWithParams = '$_url?key=$_apiKey';

      // Envia a requisição POST
      final response = await client.post(
        urlWithParams,
        data: formData,
        options: Options(
          headers: {'Content-Type': 'multipart/form-data'}, // Cabeçalho do multipart/form-data
        ),
      );

      if (response.statusCode == 200) {
        final data = response.data['data'];
        return {
          'imagem_grande': data['image']['url'],
          'imagem_media': data['medium']['url'],
          'imagem_pequena': data['thumb']['url'],
          'excluir': data['delete_url'],
        };
      } else {
        throw Exception('Erro ao enviar a imagem para o ImgBB. Status code: ${response.statusCode}');
      }
    } on DioError catch (e) {
      print('Erro de rede: ${e.response?.data}');
      throw Exception('Erro de rede: ${e.message}');
    }
  }
}
