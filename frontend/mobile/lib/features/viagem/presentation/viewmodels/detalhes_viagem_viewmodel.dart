import 'package:flutter/material.dart';
import 'package:mobile/core/auth_provider.dart';
import 'package:mobile/features/viagem/data/repositories/viagem_detalhes_repository.dart';
import 'package:mobile/features/usuario/domain/entities/prestador_entity.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:provider/provider.dart';

class ViagemDetalhesViewModel with ChangeNotifier {
  final ViagemDetalhesRepository repository;

  Viagem? _viagem;
  Prestador? _prestador;
  String? _errorMessage;
  bool _isLoading = false;

  ViagemDetalhesViewModel({required this.repository});

  Viagem? get viagem => _viagem;
  Prestador? get prestador => _prestador;
  String? get errorMessage => _errorMessage;
  bool get isLoading => _isLoading;

  Future<void> carregarDados(String idViagem, BuildContext context) async {
    _isLoading = true;
    _errorMessage = null;
    notifyListeners();

    try {

      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      final token = authProvider.token;

      if (token == null || token.isEmpty) {
        throw Exception('Token inválido ou ausente.');
      }

      // Buscar dados da viagem
      _viagem = await repository.fetchViagem(idViagem, token);
      
      // Buscar dados do prestador usando o nome da viagem
      if (_viagem != null) {
        _prestador = await repository.fetchPrestadorPorNome(
          _viagem!.nomePrestador,
          token,
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
