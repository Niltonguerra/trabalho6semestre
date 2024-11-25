import 'package:flutter/material.dart';
import 'package:mobile/core/auth_provider.dart';
import 'package:mobile/features/usuario/data/repositories/gerenciar_conta_repository%20copy.dart';
import 'package:mobile/features/usuario/domain/entities/dono_usuario_entity.dart';
import 'package:provider/provider.dart';

class GerenciaContaViewModel with ChangeNotifier {
  final GerenciarContaRepository repository;

  GerenciaContaViewModel({required this.repository});

    UsuarioDono _usuario = UsuarioDono(
    nome: '',
    email: 'carregando...',
    telefone: 'carregando...',
    foto: 'carregando...',
    dataNascimento: DateTime.now(),
    endereco: ['carregando...'],
    avaliacaoComoCliente: 3,
    cpf: 'carregando...',
    tipoConta: 'carregando...'
  );
  UsuarioDono get usuario => _usuario;

  String? _errorMessage;
  String? get errorMessage => _errorMessage;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  Future<void> carregarDados(BuildContext context) async {
    _isLoading = true;
    _errorMessage = null;
    notifyListeners();

    try {
      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      final token = authProvider.token;

      if (token == null || token.isEmpty) {
        throw Exception('Token inválido ou ausente.');
      }

      print('nilton Dioniso Guerra teste 123');
      
      _usuario = await repository.ListaUsuarioDono(token);
      _errorMessage = null;
    } catch (e) {
      _errorMessage = 'Erro ao carregar dados: $e';
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
