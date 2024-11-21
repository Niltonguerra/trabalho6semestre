import 'package:provider/provider.dart';
import 'package:mobile/features/viagem/data/viagem_repository.dart';
import 'package:mobile/features/viagem/presentation/viewmodels/detalhes_viagem_viewmodel.dart';
import 'package:mobile/core/http_client.dart';

List<ChangeNotifierProvider> getProviders() {
  final dio = HttpClient().client;
  final viagemRepository = ViagemRepository(dio: dio);

  return [
    ChangeNotifierProvider<DetalhesViagemViewModel>(
      create: (_) => DetalhesViagemViewModel(viagemRepository: viagemRepository),
    ),
    // Adicione outros ChangeNotifierProviders aqui conforme necessário
  ];
}
