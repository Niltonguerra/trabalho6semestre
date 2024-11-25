import 'package:flutter/material.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardPersonalizado.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/campoPesquisa.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/pesquisa_viagem_viewmodel.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';

class PesquisaViagemPage extends StatefulWidget {
  @override
  _PesquisaViagemPageState createState() => _PesquisaViagemPageState();
}

class _PesquisaViagemPageState extends State<PesquisaViagemPage> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
      Future.microtask(() {
        final viewModel = context.read<ViagemPesquisaViewModel>();
        if (!viewModel.isLoading && viewModel.viagensFiltradas.isEmpty) {
          viewModel.listarTodasViagens();
          viewModel.listarDadosUsuario(context);
        }
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _buildAppBar(),
      body: Consumer<ViagemPesquisaViewModel>(
        builder: (context, viewModel, _) {
          if (viewModel.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (viewModel.errorMessage != null) {
            return _buildErrorMessage(viewModel.errorMessage!);
          }

          return _buildBody(viewModel);
        },
      ),
    );
  }

  AppBar _buildAppBar() {
    return AppBar(
      backgroundColor: thirdColor,
      leading: IconButton(
        icon: const Icon(Icons.arrow_back, color: secondaryColor),
        onPressed: () => Navigator.of(context).pop(),
      ),
      title: Consumer<ViagemPesquisaViewModel>(
        builder: (context, viewModel, _) {

           final nomeUsuario = viewModel.usuario.nome.isNotEmpty
            ? viewModel.usuario.nome
            : 'Usuário';

             final fotoUsuario = viewModel.usuario.foto.isNotEmpty
            ? viewModel.usuario.foto
            : 'assets/images/user.png';


          return GestureDetector(
          onTap: () {
            Navigator.pushNamed(context, '/gerenciarConta'); // Substitua pela rota desejada
          },
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Text(
                nomeUsuario,
                style: const TextStyle(color: fivethColor),
              ),
              const SizedBox(width: 10),
              _buildUserAvatar(fotoUsuario),
            ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildUserAvatar(String imageUrl) {
    return Center(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(500.0),
        child: Image.network(
          imageUrl,
          width: 35,
          height: 35,
          fit: BoxFit.cover,
          errorBuilder: (_, __, ___) => const Icon(Icons.person, size: 35),
          loadingBuilder: (_, child, progress) {
            if (progress == null) return child;
            return const Center(
              child: CircularProgressIndicator(),
            );
          },
        ),
      ),
    );
  }

  Widget _buildErrorMessage(String errorMessage) {
    return Center(
      child: Text(
        errorMessage,
        style: const TextStyle(color: Colors.red, fontSize: 16),
      ),
    );
  }

  Widget _buildBody(ViagemPesquisaViewModel viewModel) {
    return NotificationListener<ScrollNotification>(
      onNotification: (scrollInfo) {
        if (scrollInfo is ScrollUpdateNotification) {
          viewModel.updateScrollOffset(scrollInfo.metrics.pixels);
        }
        return true;
      },
      child: Stack(
        children: [
          _buildGradientBackground(viewModel),
          _buildSearchField(viewModel),
        ],
      ),
    );
  }

  Widget _buildGradientBackground(ViagemPesquisaViewModel viewModel) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [secondaryColor, thirdColor],
          begin: Alignment.bottomCenter,
          end: Alignment.topCenter,
        ),
      ),
      child: _buildListView(viewModel),
    );
  }

  Widget _buildSearchField(ViagemPesquisaViewModel viewModel) {
    return SearchFieldWidget(
      onChanged: (query) => viewModel.searchQuery = query,
      initialQuery: viewModel.searchQuery,
      scrollOffset: viewModel.scrollOffset,
    );
  }

  Widget _buildListView(ViagemPesquisaViewModel viewModel) {
    if (viewModel.viagensFiltradas.isEmpty) {
      return const Center(child: Text('Nenhuma viagem encontrada.'));
    }

    return ListView.builder(
      padding: const EdgeInsets.only(top: 160),
      itemCount: viewModel.viagensFiltradas.length,
      itemBuilder: (context, index) {
        final item = viewModel.viagensFiltradas[index];
        return CardPersonalizado(
          onPressed: () {
            Navigator.pushNamed(
              context,
              '/detalhesViagem',
              arguments: {'idViagem': item.id},
            );
          },
          txt_destino: 'Destino: ${item.destino}',
          txt_vagas: '${item.quantidadeDeVagas} Vagas',
          txt_horarioPartida: _formatDate(item.dataHoraPartida),
          txt_preco: item.custo,
          txt_cor_fundo: fivethColor,
          txt_cor_sombra1: fivethColor,
          txt_cor_sombra2: fourthColor,
        );
      },
    );
  }

  String _formatDate(String dateString) {
    return DateFormat('dd/MM HH:mm').format(DateTime.parse(dateString));
  }
}
