import 'dart:io';

class UsuarioCriarModel {
  final String cpf;
  final String dataNascimento;
  dynamic foto; // Pode ser File ou String
  final String endereco;
  final String nome;
  final String email;
  final String senha;
  final String telefone;

  UsuarioCriarModel({
    required this.cpf,
    required this.dataNascimento,
    this.foto,
    required this.endereco,
    required this.nome,
    required this.email,
    required this.senha,
    required this.telefone,
  });

  // Converte um JSON para uma instância da classe UsuarioCriarModel
  factory UsuarioCriarModel.fromJson(Map<String, dynamic> json) {
    return UsuarioCriarModel(
      cpf: json['CPF'],
      dataNascimento: json['data_nascimento'],
      foto: json['foto'], // Assume que o JSON sempre contém uma string
      endereco: json['endereco'],
      nome: json['nome'],
      email: json['email'],
      senha: json['senha'],
      telefone: json['telefone'],
    );
  }

  // Converte uma instância da classe UsuarioCriarModel para JSON
  Map<String, dynamic> toJson() {
    return {
      'CPF': cpf,
      'data_nascimento': dataNascimento,
      'foto': foto is File ? null : foto, // Garante que só uma URL vá para o backend
      'endereco': endereco,
      'nome': nome,
      'email': email,
      'senha': senha,
      'telefone': telefone,
    };
  }
}
