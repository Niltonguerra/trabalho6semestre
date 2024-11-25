import 'package:flutter/material.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnGrande.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/detalhes_viagem_viewmodel.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCaroneiro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCarro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardDetalhesViagem.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:provider/provider.dart';

class DetalhesViagemPage extends StatefulWidget {
  final String idViagem;

  DetalhesViagemPage({required this.idViagem});

  @override
  _DetalhesViagemPageState createState() => _DetalhesViagemPageState();
}

class _DetalhesViagemPageState extends State<DetalhesViagemPage> {

  
  late ViagemDetalhesViewModel viewModel;

  @override
  void initState() {
    super.initState();
    viewModel = context.read<ViagemDetalhesViewModel>();
    _loadData();
  }

  Future<void> _loadData() async {
    await viewModel.carregarDados(widget.idViagem, context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: secondaryColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: thirdColor),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: Consumer<ViagemDetalhesViewModel>(
        builder: (context, viewModel, _) {
          if (viewModel.isLoading) {
            return Center(child: CircularProgressIndicator());
          }

          if (viewModel.errorMessage != null) {
            return Center(
              child: Text(
                viewModel.errorMessage!,
                style: TextStyle(color: Colors.red),
              ),
            );
          }

          final viagem = viewModel.viagem;
          final prestador = viewModel.prestador;

          return viagem != null && prestador != null
              ? Scrollbar(
                  child: SingleChildScrollView(
                    child: Container(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [thirdColor, secondaryColor],
                          begin: Alignment.bottomCenter,
                          end: Alignment.topCenter,
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            CardCaroneiro(
                              image: 'assets/images/user.png',
                              txt_nome_caroneiro: viagem.nomePrestador,
                              txt_avaliacao: '${prestador.avaliacaoComoPrestador}',
                              txt_email: prestador.email,
                              txt_telefone: prestador.telefone,
                              txt_cor_fundo: fivethColor,
                              txt_cor_sombra1: fourthColor,
                              txt_cor_sombra2: fivethColor,
                            ),
                            SizedBox(height: 15),
                            CardCarro(
                              image: 'assets/images/car.png',
                              txt_modelo_carro: prestador.carro.modelo,
                              txt_ano_carro: '${prestador.carro.ano}',
                              txt_cor_carro: prestador.carro.cor,
                              txt_placa_carro: prestador.carro.placa,
                              txt_cor_fundo: fivethColor,
                              txt_cor_sombra1: fourthColor,
                              txt_cor_sombra2: fivethColor,
                            ),
                            SizedBox(height: 15),
                            CardDetalhesViagem(
                              txt_ponto_encontro: viagem.origem,
                              txt_ponto_destino: viagem.destino,
                              txt_vagas_disponiveis: '${viagem.quantidadeDeVagas}',
                              txt_horario_partida: _formatHour(viagem.dataHoraPartida),
                              txt_horario_chegada: _formatHour(viagem.dataHoraChegada),
                              txt_preco_carona: '${viagem.custo}',
                              txt_data_viagem: _formatDate(viagem.dataHoraPartida),
                              txt_cor_fundo: fivethColor,
                              txt_cor_sombra1: fourthColor,
                              txt_cor_sombra2: fivethColor,
                            ),
                            SizedBox(height: 15),
                              BtnGrande(
                                  onPressed: (){},
                                  txt_botao: 'Quero a Carona!',
                                  txt_cor_fundo: secondaryColor,
                                  txt_cor_texto: fivethColor
                              ),
                              SizedBox(height: 15),
                          ],
                        ),
                      ),
                    ),
                  ),
                )
              : Center(child: Text('Dados não carregados.'));
        },
      ),
    );
  }

  String _formatDate(String dateString) {
    final dateTime = DateTime.parse(dateString);
    return '${dateTime.day}/${dateTime.month}/${dateTime.year}';
  }

  String _formatHour(String dateString) {
    final dateTime = DateTime.parse(dateString);
    return '${dateTime.hour}:${dateTime.minute}';
  }
}
