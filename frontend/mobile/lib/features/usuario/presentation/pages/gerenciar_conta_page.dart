import 'package:flutter/material.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/mensagens_layout/MensagemDuasOpcoes.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/mensagens_layout/MensagemConfirmacao.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Buttons/BtnGrande.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardCarro.dart';
import 'package:mobile/core/utils/widgets_reutilizaveis/Cards/CardDetalhesUsuario.dart';
import 'package:mobile/core/variables/colors.dart';
import 'package:mobile/res/font_res.dart';
import 'package:mobile/features/usuario/presentation/viewmodels/gerenciar_conta_viewmodel.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';



class GerenciarContaPage extends StatefulWidget {
  @override
  _GerenciarContaPageState createState() => _GerenciarContaPageState();
}

class _GerenciarContaPageState extends State<GerenciarContaPage> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    Future.microtask(() {
      final viewModel = context.read<GerenciaContaViewModel>();
      if (!viewModel.isLoading && viewModel.usuario.nome.isEmpty) {
        viewModel.carregarDados(context);
      }
    });
  }

  void _excluirConta() {
    _showMessageTwoButtons(
      'Excluir Conta',
      'Deseja realmente excluir sua conta?',
      () => Navigator.pushNamed(context, '/login'),
      'Sim',
      () => Navigator.pop(context),
      'Não',
    );
  }

  void _showMessageOneButton(
      String title, String message, VoidCallback onPressed) {
    mostrarMensagemConfirmacao(
      context,
      onPressed,
      title,
      message,
      'Fechar',
    );
  }


  String _formatDate(DateTime dateString) {
    return DateFormat('dd/MM/yyyy').format(dateString);
  }

  void _showMessageTwoButtons(
      String title,
      String message,
      VoidCallback onPressed1,
      String textBtn1,
      VoidCallback onPressed2,
      String textBtn2) {
    mostrarMensagemDuasOpcoes(
      context,
      onPressed1,
      onPressed2,
      title,
      message,
      textBtn1,
      textBtn2,
    );
  }

  Widget _buildUserAvatar(String imageUrl) {
    return Center(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(500.0),
        child: Image.network(
          imageUrl,
          width: 200,
          height: 200,
          fit: BoxFit.cover,
          errorBuilder: (_, __, ___) => const Icon(Icons.person, size: 200),
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


  Widget _buildActionButton(String text, VoidCallback onPressed) {
    return BtnGrande(
      onPressed: onPressed,
      txt_botao: text,
      txt_cor_fundo: primaryColor,
      txt_cor_texto: fivethColor,
    );
  }


  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<GerenciaContaViewModel>();
    return Scaffold(
      appBar: AppBar(
        backgroundColor: secondaryColor,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: thirdColor),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: Scrollbar(
        child: SingleChildScrollView(
          child: Container(
            decoration: const BoxDecoration(
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
                  const Text(
                    'Gerenciar Perfil!',
                    style: TextStyle(
                      fontSize: 36,
                      color: fourthColor,
                      fontFamily: FontRes.INTER_REGULAR,
                    ),
                  ),
                  const SizedBox(height: 20),
                  _buildUserAvatar(viewModel.usuario?.foto ?? ''),
                  const SizedBox(height: 30),
                  CardDetalhesUsuario(
                    txt_nome: viewModel.usuario!.nome,
                    txt_idade: viewModel.usuario?.dataNascimento != null ? _formatDate(viewModel.usuario!.dataNascimento) : 'data de nascimento',
                    txt_avaliacao_como_cliente: '${viewModel.usuario?.avaliacaoComoCliente}',
                    txt_endereco: viewModel.usuario!.endereco.join(', ') ,
                    txt_email: viewModel.usuario!.email,
                    txt_telefone: viewModel.usuario!.telefone,
                    txt_avaliacao_como_prestador: viewModel.usuario?.avaliacaoComoPrestador != null ? '${viewModel.usuario?.avaliacaoComoPrestador}' : 'NA',
                    txt_cor_fundo: fivethColor,
                    txt_cor_sombra1: fourthColor,
                    txt_cor_sombra2: fivethColor,
                    onPressed: () {Navigator.pushNamed(context, '/editarUsuario');},
                    txt_cor_fundo_btn: secondaryColor,
                    txt_cor_texto_btn: fivethColor,
                    txt_texto_btn: 'Editar',
                    
                  ),
                  const SizedBox(height: 50),

                  if(viewModel.usuario?.tipoConta == 'prestador') ...[
                    CardCarro(
                      image: 'assets/images/car.png',
                      txt_modelo_carro: viewModel.usuario?.carro?.modelo ?? 'Modelo não disponível',
                      txt_ano_carro: '${viewModel.usuario?.carro!.ano}' ,
                      txt_cor_carro: viewModel.usuario?.carro?.cor ?? 'Cor não disponível',
                      txt_placa_carro: viewModel.usuario?.carro!.placa ?? 'placa não disponível',
                      txt_cor_fundo: fivethColor,
                      txt_cor_sombra1: fourthColor,
                      txt_cor_sombra2: fivethColor,
                      onPressed: () {Navigator.pushNamed(context, '/editarCarro');},
                      txt_cor_fundo_btn: secondaryColor,
                      txt_cor_texto_btn: fivethColor,
                      txt_texto_btn: 'Editar',
                    ),
                    const SizedBox(height: 50),
                  ],
                  _buildActionButton(
                    'Visualizar histórico',
                    () => Navigator.pushNamed(context, '/pesquisaHistorico'),
                  ),
                  if(viewModel.usuario?.tipoConta != 'prestador') ...[
                    const SizedBox(height: 15),
                    _buildActionButton(
                      'Tornar-se um prestador',
                      () => Navigator.pushNamed(
                          context, '/solicitarVirarPrestador'),
                    ),
                  ],
                  const SizedBox(height: 15),
                  _buildActionButton(
                    'Excluir conta',
                    _excluirConta,
                  ),
                  const SizedBox(height: 15),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
