import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/campoPesquisa.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardPersonalizado.dart';
import 'package:mobile/core/utils/variables/colors.dart';
import 'package:mobile/features/viagem/domain/entities/viagem_entity.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/pesquisa_viagem_viewmodel.dart';
import 'package:http/http.dart' as http;


class PesquisaViagemPage extends StatefulWidget {
  @override
  _PesquisaViagemPageState createState() => _PesquisaViagemPageState();
}

class _PesquisaViagemPageState extends State<PesquisaViagemPage> {
  final ViagemPesquisaService _viagemService = ViagemPesquisaService(client: http.Client());
  List<Viagem> items = [];
  bool _isLoading = true;
  String? _errorMessage;
  double _scrollOffset = 0.0;
  String _searchQuery = '';

  @override
  void initState() {
    super.initState();
    _fetchData();
  }

  /// Formata a data para exibição no formato `dd/MM/yyyy HH:mm`.
  String formatDate(String dateString) {
    return DateFormat('dd/MM HH:mm').format(DateTime.parse(dateString));
  }

  /// Busca os dados e atualiza o estado.
  Future<void> _fetchData() async {

    setState(() {
      _isLoading = true;
    });

    try {
      final viagens = await _viagemService.listarTodasViagens();
      setState(() {
        items = viagens;
        _errorMessage = null;
      });
    } catch (e) {
      setState(() {
        _errorMessage = e.toString();
      });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  /// Cria o AppBar da tela.
  PreferredSizeWidget _buildAppBar() {
    return AppBar(
      backgroundColor: thirdColor,
      leading: IconButton(
        icon: Icon(Icons.arrow_back, color: secondaryColor),
        onPressed: () => Navigator.of(context).pop(),
      ),
      title: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Text('Nome do usuário', style: TextStyle(color: fivethColor)),
          SizedBox(width: 10),
          Icon(Icons.person, color: fivethColor, size: 40),
        ],
      ),
    );
  }

  /// Cria o campo de pesquisa.
  Widget _buildSearchField() {
    return SearchFieldWidget(
      onChanged: (query) {
        setState(() {
          _searchQuery = query;
        });
      },
      initialQuery: _searchQuery,
      scrollOffset: _scrollOffset,
    );
  }

  /// Cria a lista de itens.
  Widget _buildListView() {
    return ListView.builder(
      padding: EdgeInsets.only(top: 160),
      itemCount: items.length,
      itemBuilder: (context, index) {
        final item = items[index];

        if (_searchQuery.isEmpty ||
            item.destino.toLowerCase().contains(_searchQuery.toLowerCase())) {
          return CardPersonalizado(
            onPressed: () {
              Navigator.pushNamed(
                context,
                '/detalhesViagem',
                arguments: {
                  'idViagem': item.id, 
                  },
              );
            },
            txt_destino: 'Destino: ${item.destino}',
            txt_vagas: '${item.quantidadeDeVagas} Vagas',
            txt_horarioPartida: formatDate(item.dataHoraPartida),
            txt_preco: item.custo,
            txt_cor_fundo: fivethColor,
            txt_cor_sombra1: fivethColor,
            txt_cor_sombra2: fourthColor,
          );
        }

        return SizedBox.shrink();
      },
    );
  }

  /// Cria o corpo da tela com o comportamento de scroll e o campo de pesquisa.
  Widget _buildBody() {
    return NotificationListener<ScrollNotification>(
      onNotification: (scrollInfo) {
        if (scrollInfo is ScrollUpdateNotification) {
          setState(() {
            _scrollOffset = scrollInfo.metrics.pixels;
          });
        }
        return true;
      },
      child: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [secondaryColor, thirdColor],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
            child: _buildListView(),
          ),
          _buildSearchField(),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(),
      body: _buildBody(),
    );
  }
}
