class Validators {
  /// Valida se o campo não está vazio
  static String? validateRequired(String? value) {
    if (value == null || value.isEmpty) {
      return 'Este campo é obrigatório.';
    }
    return null;
  }

  /// Remove caracteres não numéricos do CPF
  static String _cleanCpf(String cpf) {
    return cpf.replaceAll(RegExp(r'[^0-9]'), '');
  }

  /// Calcula os dígitos verificadores do CPF
  static int _calculateVerifier(List<int> digits, int length, int weight) {
    final sum = List.generate(length, (i) => digits[i] * (weight - i))
        .reduce((value, element) => value + element);

    final result = (sum * 10) % 11;
    return result == 10 ? 0 : result;
  }

  /// Verifica se o CPF é válido
  static bool _isValidCpf(String? cpf) {
    if (cpf == null || cpf.isEmpty) {
      return false;
    }

    // Remove caracteres não numéricos
    cpf = _cleanCpf(cpf);

    // Validações básicas
    if (cpf.length != 11 || RegExp(r'^(\d)\1*$').hasMatch(cpf)) {
      return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
    }

    // Converte o CPF em uma lista de inteiros
    final digits = cpf.split('').map(int.parse).toList();

    // Valida o primeiro dígito verificador
    final firstVerifier = _calculateVerifier(digits, 9, 10);
    if (firstVerifier != digits[9]) {
      return false;
    }

    // Valida o segundo dígito verificador
    final secondVerifier = _calculateVerifier(digits, 10, 11);
    if (secondVerifier != digits[10]) {
      return false;
    }

    return true; // CPF válido
  }

  /// Valida o CPF e retorna uma mensagem de erro, se necessário
  static String? validateCpf(String? value) {
    if (value == null || value.isEmpty) {
      return 'O CPF é obrigatório.';
    }

    if (!_isValidCpf(value)) {
      return 'CPF inválido.';
    }

    return null; // Sem erros
  }

  /// Valida se o e-mail é válido
  static String? validateEmail(String? value) {
    if (value == null || !RegExp(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$').hasMatch(value)) {
      return 'E-mail inválido.';
    }
    return null;
  }

  /// Valida de senha com critérios específicos
  static String? validatePassword(String? password) {
    if (password == null || password.isEmpty) {
      return 'não pode ser vazia.';
    }

    if (password.length < 8 || password.length > 16) {
      return 'Deve ter entre 8 e 16 caracteres.';
    }

    final uppercaseRegex = RegExp(r'[A-Z]');
    if (uppercaseRegex.allMatches(password).length < 2) {
      return 'Deve ter pelo menos 2 letras maiúsculas.';
    }

    final lowercaseRegex = RegExp(r'[a-z]');
    if (lowercaseRegex.allMatches(password).length < 2) {
      return 'Deve ter pelo menos 2 letras minúsculas.';
    }

    final digitRegex = RegExp(r'[0-9]');
    if (digitRegex.allMatches(password).length < 2) {
      return 'Deve ter pelo menos 2 números.';
    }

    return null; // Senha válida
  }

  /// Valida a confirmação da senha
  static String? validatePasswordConfirmation(String? password, String? confirmation) {
    if (password != confirmation) {
      return 'As senhas não coincidem.';
    }
    return null;
  }

  /// Valida número de celular brasileiro
  static String? validatePhoneNumber(String? value) {
    if (value == null || value.isEmpty) {
      return 'Este campo é obrigatório.';
    }

    // Remove todos os caracteres não numéricos
    final cleanedValue = value.replaceAll(RegExp(r'[^\d]'), '');

    // Verifica se tem exatamente 11 dígitos
    if (cleanedValue.length != 11) {
      return 'O número de celular deve ter 11 dígitos.';
    }

    // Verifica o formato válido
    final regex = RegExp(r'^[1-9][0-9]9[1-9][0-9]{7}$');
    if (!regex.hasMatch(cleanedValue)) {
      return 'Use o formato (DD) 9XXXX-XXXX.';
    }

    return null; // Número válido
  }
}
