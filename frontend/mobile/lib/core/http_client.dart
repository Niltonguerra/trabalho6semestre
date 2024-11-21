import 'package:dio/dio.dart';

class HttpClient {
  final Dio _dio;

  HttpClient()
      : _dio = Dio(
          BaseOptions(
            baseUrl: 'http://192.168.18.19:3100',
            connectTimeout: 5000, // 5 segundos
            receiveTimeout: 5000, // 5 segundos
            headers: {
              'Content-Type': 'application/json',
            },
          ),
        ) {
    // Adiciona interceptores
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) {
          // Adicionar lógica antes de enviar a requisição
          print('Requisição: ${options.method} ${options.uri}');
          return handler.next(options);
        },
        onResponse: (response, handler) {
          // Adicionar lógica ao receber a resposta
          print('Resposta: ${response.statusCode} ${response.data}');
          return handler.next(response);
        },
        onError: (DioError error, handler) {
          // Adicionar lógica ao receber um erro
          print('Erro: ${error.message}');
          return handler.next(error);
        },
      ),
    );
  }

  Dio get client => _dio;
}
