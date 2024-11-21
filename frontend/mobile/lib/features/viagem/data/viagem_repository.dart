import 'package:dio/dio.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:mobile/features/viagem/domain/entities/prestador_entity.dart';

class ViagemRepository {
  final Dio dio;

  ViagemRepository({required this.dio});

  Future<Viagem> fetchViagem(String idViagem, String token) async {
    try {
      final response = await dio.post(
        '/viagens/listaUmaViagem',
        data: {'idViagem': idViagem},
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );

      if (response.statusCode == 201) {
        final data = response.data['ListarViagemDto'];
        return Viagem.fromJson(data);
      } else {
        throw Exception('Erro ao buscar viagem: ${response.statusCode}');
      }
    } on DioError catch (e) {
      throw Exception('Erro ao buscar viagem: ${e.message}');
    }
  }

  Future<Prestador> fetchPrestadorPorNome(String nome, String token) async {
    try {
      final response = await dio.get(
        '/prestador/search/nome/$nome/1',
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );

      if (response.statusCode == 200) {
        final data = response.data['resultado'] as List;
        if (data.isNotEmpty) {
          return Prestador.fromJson(data[0]);
        } else {
          throw Exception('Prestador não encontrado.');
        }
      } else {
        throw Exception('Erro ao buscar prestador: ${response.statusCode}');
      }
    } on DioError catch (e) {
      throw Exception('Erro ao buscar prestador: ${e.message}');
    }
  }
}
