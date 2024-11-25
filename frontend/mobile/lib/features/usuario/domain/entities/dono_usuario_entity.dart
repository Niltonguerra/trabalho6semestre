class UsuarioDono {
  final String nome;
  final String email;
  final String telefone;
  final String foto;
  final DateTime dataNascimento;
  final List<String> endereco;
  final int avaliacaoComoCliente;
  final List<String> historicoDeViagens;
  final String cpf;
  final String tipoConta;
  final String? cnh;
  final String? rg;
  final int? avaliacaoComoPrestador;
  final String? crlv;
  final String? dpvat;
  final String? fotoCnh;
  final Carro? carro;
  final List<String> idViagens;

  UsuarioDono({
    required this.nome,
    required this.email,
    required this.telefone,
    required this.foto,
    required this.dataNascimento,
    required this.endereco,
    required this.avaliacaoComoCliente,
    this.historicoDeViagens = const [],
    required this.cpf,
    required this.tipoConta,
    this.cnh,
    this.rg,
    this.avaliacaoComoPrestador,
    this.crlv,
    this.dpvat,
    this.fotoCnh,
    this.carro,
    this.idViagens = const [],
  });

  /// Cria uma instância a partir de um JSON.
  factory UsuarioDono.fromJson(Map<String, dynamic> json) {
    return UsuarioDono(
      nome: json['nome'] as String? ?? 'Desconhecido',
      email: json['email'] as String? ?? '',
      telefone: json['telefone'] as String? ?? '',
      foto: json['foto'] as String? ?? '',
      dataNascimento: json['data_nascimento'] != null
          ? DateTime.parse(json['data_nascimento'])
          : DateTime.now(),
      endereco: json['endereco'] != null
          ? List<String>.from(json['endereco'])
          : [],
      avaliacaoComoCliente: json['avaliacao_como_cliente'] as int? ?? 0,
      historicoDeViagens: json['historico_de_viagens'] != null
          ? List<String>.from(json['historico_de_viagens'])
          : [],
      cpf: json['CPF'] as String? ?? '',
      tipoConta: json['tipo_conta'] as String? ?? '',
      cnh: json['CNH'] as String?,
      rg: json['RG'] as String?,
      avaliacaoComoPrestador: json['avaliacao_como_prestador'] as int?,
      crlv: json['CRLV'] as String?,
      dpvat: json['DPVAT'] as String?,
      fotoCnh: json['foto_CNH'] as String?,
      carro: json['carro'] != null ? Carro.fromJson(json['carro']) : null,
      idViagens: json['id_viagens'] != null
          ? List<String>.from(json['id_viagens'])
          : [],
    );
  }

  /// Converte uma instância para JSON.
  Map<String, dynamic> toJson() {
    return {
      'nome': nome,
      'email': email,
      'telefone': telefone,
      'foto': foto,
      'data_nascimento': dataNascimento.toIso8601String(),
      'endereco': endereco,
      'avaliacao_como_cliente': avaliacaoComoCliente,
      'historico_de_viagens': historicoDeViagens,
      'CPF': cpf,
      'tipo_conta': tipoConta,
      'CNH': cnh,
      'RG': rg,
      'avaliacao_como_prestador': avaliacaoComoPrestador,
      'CRLV': crlv,
      'DPVAT': dpvat,
      'foto_CNH': fotoCnh,
      'carro': carro?.toJson(),
      'id_viagens': idViagens,
    };
  }
}

class Carro {
  final int ano;
  final String cor;
  final String foto;
  final String modelo;
  final String placa;

  Carro({
    required this.ano,
    required this.cor,
    required this.foto,
    required this.modelo,
    required this.placa,
  });

  /// Cria uma instância de Carro a partir de um JSON.
  factory Carro.fromJson(Map<String, dynamic> json) {
    return Carro(
      ano: json['ano'] as int? ?? 0,
      cor: json['cor'] as String? ?? '',
      foto: json['foto'] as String? ?? '',
      modelo: json['modelo'] as String? ?? '',
      placa: json['placa'] as String? ?? '',
    );
  }

  /// Converte uma instância de Carro para JSON.
  Map<String, dynamic> toJson() {
    return {
      'ano': ano,
      'cor': cor,
      'foto': foto,
      'modelo': modelo,
      'placa': placa,
    };
  }
}
