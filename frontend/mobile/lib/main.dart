import 'package:flutter/material.dart';
import 'package:mobile/providers.dart';
import 'package:mobile/routes.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:provider/provider.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Carregar variáveis de ambiente
  await dotenv.load();

  // Configurar a chave pública da Stripe a partir do arquivo .env
  Stripe.publishableKey = dotenv.env['STRIPE_PUBLISHABLE_KEY']!;
  // Stripe.publishableKey =
  //     'pk_test_51QD6yqCrlTCpKLoSDysVxuS25WRE2fVvNdurFlXdvqwcHfCDjq7nwhcqPAYDtUQ5TkLMHzajBptjcbiWtqoBVI2j00BPOVBPut';

  // Inicializar o aplicativo
  runApp(
      MultiProvider(
        providers: getProviders(),
        child: MyApp(),
      ),
    );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Navigation',
        localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        ],
        supportedLocales: [
          const Locale('pt', 'BR'), // Português do Brasil
          const Locale('en', 'US'), // Inglês (opcional)
        ],
        initialRoute: AppRoutes.initialRoute,
        onGenerateRoute: AppRoutes.onGenerateRoute,
    );
  }
}
