import 'package:flutter/material.dart';

class Prestador {
  final String nome;
  final String email;
  final String telefone;
  final String foto;
  final double avaliacaoComoCliente;
  final Carro carro;
  final double avaliacaoComoPrestador;
  final List<String> idViagens;

  Prestador({
      required this.nome,
      required this.email,
      required this.telefone,
      required this.foto,
      required this.avaliacaoComoCliente,
      required this.carro,
      required this.idViagens,
      required this.avaliacaoComoPrestador
  });

  // Método para converter de JSON para o modelo
  factory Prestador.fromJson(Map<String, dynamic> json) {
    return Prestador(
        nome: json['nome'],
        email: json['email'],
        telefone: json['telefone'],
        foto: json['foto'],
        avaliacaoComoCliente:(json['avaliacao_como_cliente'] as num).toDouble(),
        carro: Carro.fromJson(json['carro']),
        idViagens: List<String>.from(json['id_viagens']),
        avaliacaoComoPrestador: (json['avaliacao_como_prestador'] as num).toDouble()
    );
  }

  // Método para converter o modelo para JSON
  Map<String, dynamic> toJson() {
    return {
      'nome': nome,
      'email': email,
      'telefone': telefone,
      'foto': foto,
      'avaliacao_como_cliente': avaliacaoComoCliente,
      'carro': carro.toJson(),
      'id_viagens': idViagens,
      'avaliacao_como_prestador': avaliacaoComoPrestador
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

  // Método para converter de JSON para o modelo
  factory Carro.fromJson(Map<String, dynamic> json) {
    return Carro(
      ano: json['ano'],
      cor: json['cor'],
      foto: json['foto'],
      modelo: json['modelo'],
      placa: json['placa'],
    );
  }

  // Método para converter o modelo para JSON
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
