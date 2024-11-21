import 'package:flutter/material.dart';
import 'package:mobile/features/viagem/data/viagem_repository.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:mobile/features/viagem/domain/entities/prestador_entity.dart';

class DetalhesViagemViewModel with ChangeNotifier {
  final ViagemRepository viagemRepository;
  Viagem? _viagem;
  Prestador? _prestador;
  String? _errorMessage;
  bool _isLoading = false;

  DetalhesViagemViewModel({required this.viagemRepository});

  Viagem? get viagem => _viagem;
  Prestador? get prestador => _prestador;
  String? get errorMessage => _errorMessage;
  bool get isLoading => _isLoading;

  Future<void> carregarDados(String idViagem) async {
    _isLoading = true;
    notifyListeners();

    try {
      // Buscar dados da viagem
      _viagem = await viagemRepository.fetchViagem(idViagem, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHRvbmRnLjMwQGdtYWlsLmNvbSIsImlkIjoiNjcyM2M4MDE4YWJlYTFlYjYwMDUwZDUyIiwiaWF0IjoxNzMwODQyODU5fQ.JGVYjvotckURO3HoSVHE9yBgupE83Zwa8-fgqJVkkXA');
      
      // Buscar dados do prestador usando o nome da viagem
      if (_viagem != null) {
        _prestador = await viagemRepository.fetchPrestadorPorNome(
          _viagem!.nomePrestador,
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHRvbmRnLjMwQGdtYWlsLmNvbSIsImlkIjoiNjcyM2M4MDE4YWJlYTFlYjYwMDUwZDUyIiwiaWF0IjoxNzMwODQyODU5fQ.JGVYjvotckURO3HoSVHE9yBgupE83Zwa8-fgqJVkkXA',
        );
      }
      _errorMessage = null;
    } catch (e) {
      _errorMessage = 'Erro ao carregar dados: $e';
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
