// lib/features/viagem/domain/entities/viagem.dart
class Viagem {
  final String id;
  final String custo;
  final String origem;
  final String destino;
  final String dataHoraPartida;
  final String dataHoraChegada;
  final int quantidadeDeVagas;
  final String nomePrestador;
  final List<String> idUsuarios;

  Viagem({
    required this.id,
    required this.custo,
    required this.origem,
    required this.destino,
    required this.dataHoraPartida,
    required this.dataHoraChegada,
    required this.quantidadeDeVagas,
    required this.nomePrestador,
    required this.idUsuarios,
  });

  factory Viagem.fromJson(Map<String, dynamic> json) {
    return Viagem(
      id: json['_id'],
      custo: json['custo'],
      origem: json['origem'],
      destino: json['destino'],
      dataHoraPartida: json['data_hora_partida'],
      dataHoraChegada: json['data_hora_chegada'],
      quantidadeDeVagas: json['quantidade_de_vagas'],
      nomePrestador: json['nome_prestador'],
      idUsuarios: List<String>.from(json['id_usuarios']),
    );
  }
}
