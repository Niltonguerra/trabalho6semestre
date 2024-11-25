import 'package:dio/dio.dart';

class HttpClient {
  final Dio _dio;

  HttpClient({String? baseUrl})
      : _dio = Dio(
          BaseOptions(
            baseUrl: baseUrl ?? const String.fromEnvironment('API_URL', defaultValue: 'http://192.168.18.19:3100'),
            connectTimeout: const Duration(milliseconds: 5000),
            receiveTimeout: const Duration(milliseconds: 5000),
            headers: {
              'Content-Type': 'application/json',
            },
          ),
        ) {
    // Adiciona interceptores
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) {
          // Lógica antes de enviar a requisição
          return handler.next(options);
        },
        onResponse: (response, handler) {
          // Lógica ao receber a resposta
          return handler.next(response);
        },
        onError: (DioError error, handler) {
          // Lógica ao receber um erro
          return handler.next(error);
        },
      ),
    );
  }

  Dio get client => _dio;
}
