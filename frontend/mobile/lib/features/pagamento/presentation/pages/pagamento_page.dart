import 'package:flutter/material.dart';
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';

class PaymentPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(

      appBar: AppBar(
        title: Text('Nova Página'),
      ),

      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'teste1',
              style: TextStyle(fontSize: 24),
            ),

            SizedBox(height: 20),

            ElevatedButton(
              onPressed: () {
                _launchURL(context); // Chama a função para abrir a URL
              },
              child: Text('Abrir Flutter Homepage'),
            ),

          ],
        ),
      ),
    ),
    );
  }

  // Função para abrir a URL usando Custom Tabs
  void _launchURL(BuildContext context) async {
    final theme = Theme.of(context);

    try {
      await launchUrl(
        Uri.parse('https://flutter.dev'),
        customTabsOptions: CustomTabsOptions(
          colorSchemes: CustomTabsColorSchemes.defaults(
            toolbarColor: theme.colorScheme.primary, 
          ),
          shareState: CustomTabsShareState.on,
          urlBarHidingEnabled: true,
          showTitle: true,
          closeButton: CustomTabsCloseButton(
            icon: CustomTabsCloseButtonIcons.back,
          ),
        ),

        safariVCOptions: SafariViewControllerOptions(
          preferredBarTintColor: theme.colorScheme.primary,
          preferredControlTintColor: theme.colorScheme.onPrimary,
          barCollapsingEnabled: true,
          dismissButtonStyle: SafariViewControllerDismissButtonStyle.close,
        ),
      );
    } catch (e) {
      debugPrint('Erro ao abrir URL: $e'); // Imprime o erro se falhar
    }
  }
}
