import 'package:flutter/material.dart';
import 'package:mobile/core/auth_provider.dart';
import 'package:mobile/features/usuario/domain/entities/dono_usuario_entity.dart';
import 'package:mobile/features/viagem/data/repositories/viagem_pesquisa_repository.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:provider/provider.dart';

class ViagemPesquisaViewModel with ChangeNotifier {
  final ViagemPesquisaRepository repository;

  bool _isLoading = false;
  bool get isLoading => _isLoading;
  String? _errorMessage;
  String? get errorMessage => _errorMessage;

  double get scrollOffset => _scrollOffset;
  String get searchQuery => _searchQuery;
  double _scrollOffset = 0.0;
  String _searchQuery = '';

  ViagemPesquisaViewModel({required this.repository});

  List<Viagem> get viagensFiltradas {
    if (_searchQuery.isEmpty) return _viagens;

    final query = _searchQuery.toLowerCase();

    return _viagens
        .where((viagem) => viagem.destino.toLowerCase().contains(query))
        .toList();
  }

  List<Viagem> _viagens = [];

  /// Carrega todas as viagens do repositório.
  Future<void> listarTodasViagens() async {
    _setLoadingState(true);
    try {
      _viagens = await repository.listarTodasViagens();
      _errorMessage = null;
    } catch (e) {
      _errorMessage = 'Erro ao carregar viagens. Verifique sua conexão.';
    } finally {
      _setLoadingState(false);
    }
  }

  UsuarioDono _usuario = UsuarioDono(
    nome: '',
    email: '',
    telefone: '',
    foto: '',
    dataNascimento: DateTime.now(),
    endereco: [''],
    avaliacaoComoCliente: 0,
    historicoDeViagens: [],
    cpf: '',
    tipoConta: ''
  );

  UsuarioDono get usuario => _usuario;

  Future<void> listarDadosUsuario(BuildContext context) async {
    _setLoadingState(true);
    try {
      final authProvider = Provider.of<AuthProvider>(context, listen: false);
      final token = authProvider.token;

      if (token == null || token.isEmpty) {
        throw Exception('Token inválido ou ausente.');
      }
      _usuario = await repository.fetchDadosPessoais(token);
      _errorMessage = null;
    } catch (e) {
      _errorMessage = 'Erro ao carregar usuario. Verifique sua conexão.';
    } finally {
      _setLoadingState(false);
    }
  }

  void _setLoadingState(bool isLoading) {
    _isLoading = isLoading;
    notifyListeners();
  }

  set searchQuery(String query) {
    _searchQuery = query;
    notifyListeners();
  }

  void updateScrollOffset(double offset) {
    _scrollOffset = offset;
    notifyListeners();
  }
}
