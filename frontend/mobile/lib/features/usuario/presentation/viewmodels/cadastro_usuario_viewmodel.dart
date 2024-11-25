import 'package:flutter/foundation.dart';
import 'package:mobile/features/usuario/data/models/usuario_criar_model.dart';
import 'package:mobile/features/usuario/data/repositories/cadastro_usuario_repository.dart';
import 'package:flutter/foundation.dart';


class CadastroUsuarioViewModel extends ChangeNotifier {
  final CadastroUsuarioRepository repository;

  CadastroUsuarioViewModel({required this.repository});

  bool _isLoading = false;
  String? _errorMessage;
  String? _successMessage;

  /// Getters para os estados
  bool get isLoading => _isLoading;
  String? get errorMessage => _errorMessage;
  String? get successMessage => _successMessage;


  bool _isFormValid = false;
  bool get isFormValid => _isFormValid;

  void updateFormValidity(bool isValid) {
    _isFormValid = isValid;
    notifyListeners();
  }

  /// Cadastra o usuário e atualiza os estados correspondentes.
  Future<bool> cadastrarUsuario(UsuarioCriarModel usuario) async {
    _setLoadingState(true);
    _clearMessages();

    try {
      final response = await repository.cadastrarUsuario(usuario);

      if (response.statusCode == 201) {
        _setSuccessMessage(response.mensagem ?? 'Cadastro realizado com sucesso.');
        return true;
      } else {
        _setErrorMessage(response.mensagem ?? 'Erro no cadastro.');
        return false;
      }
    } catch (e) {
      _setErrorMessage('Erro inesperado: $e');
      return false;
    } finally {
      _setLoadingState(false);
    }
  }

  /// Atualiza o estado de carregamento.
  void _setLoadingState(bool isLoading) {
    _isLoading = isLoading;
    notifyListeners();
  }

  /// Atualiza a mensagem de erro.
  void _setErrorMessage(String message) {
    _errorMessage = message;
    _successMessage = null;
    notifyListeners();
  }

  /// Atualiza a mensagem de sucesso.
  void _setSuccessMessage(String message) {
    _successMessage = message;
    _errorMessage = null;
    notifyListeners();
  }

  /// Limpa mensagens de sucesso e erro.
  void _clearMessages() {
    _errorMessage = null;
    _successMessage = null;
  }

  /// Reseta o estado do ViewModel.
  void resetState() {
    _isLoading = false;
    _clearMessages();
    notifyListeners();
  }

}
