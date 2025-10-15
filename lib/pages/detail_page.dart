import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/models/nail_polish.dart';
import 'package:olive_june_gel_collection/widgets/image_carousel.dart';
import 'package:url_launcher/url_launcher.dart';

class DetailPage extends StatelessWidget {
  final NailPolish polish;

  const DetailPage({
    required this.polish,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 600;

    final title = Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(
        polish.name,
        style: const TextStyle(fontSize: 35, fontWeight: FontWeight.bold),
      ),
    );

    final subheading = Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Text(
        polish.colorDescription,
        style: TextStyle(
          fontSize: 18,
          color: Theme.of(context).colorScheme.secondary,
        ),
      ),
    );

    final viewOnOliveAndJune = Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
      child: InkWell(
        onTap: () {
          if (polish.url.isNotEmpty) {
            // Use url_launcher to open the link
            // Make sure to add url_launcher to pubspec.yaml
            launchUrl(Uri.parse(polish.url));
          }
        },
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(Icons.shopping_bag, size: 20),
            const SizedBox(width: 6),
            Text(
              "View on Olive And June",
              style: TextStyle(
                fontSize: 16,
                color: Theme.of(context).colorScheme.primary,
                decoration: TextDecoration.underline,
              ),
            ),
          ],
        ),
      ),
    );

    final imageCarousel = ImageCarousel(nailPolish: polish);

    final descriptionCard = Card(
      child: Padding(
        padding: const EdgeInsets.all(22.0),
        child: Text(
          polish.description,
          style: const TextStyle(fontSize: 16),
        ),
      ),
    );

    Widget buildPolishInfo(String label, String value) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 6.0),
        child: RichText(
          text: TextSpan(
            children: [
              TextSpan(
                text: '$label: ',
                style:
                    const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              ),
              TextSpan(
                text: value,
                style: const TextStyle(fontSize: 16),
              ),
            ],
          ),
        ),
      );
    }

    final colorCard = Card(
      child: Padding(
        padding: const EdgeInsets.all(22.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            buildPolishInfo("Price", polish.price),
            buildPolishInfo("Color Family", polish.color),
            buildPolishInfo("Color Kind", polish.colorKind),
            buildPolishInfo("Undertone", polish.undertone),
            buildPolishInfo("Finish Type", polish.finishType),
            buildPolishInfo("Season", polish.season),
          ],
        ),
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text("Olive & June Gel Polish Collection Tracker"),
      ),
      body: isMobile
          ? SingleChildScrollView(
              child: Column(
                children: [
                  title,
                  subheading,
                  viewOnOliveAndJune,
                  imageCarousel,
                  descriptionCard,
                  colorCard
                ],
              ),
            )
          : Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                children: [
                  IntrinsicHeight(
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        const Expanded(flex: 1, child: SizedBox()),
                        Expanded(
                            flex: 3,
                            child: Container(
                                alignment: Alignment.topCenter,
                                child: imageCarousel)),
                        Expanded(
                            flex: 2,
                            child: Container(
                                alignment: Alignment.topCenter,
                                child: Column(
                                  crossAxisAlignment:
                                      CrossAxisAlignment.stretch,
                                  children: [
                                    title,
                                    subheading,
                                    viewOnOliveAndJune,
                                    Expanded(
                                      child: descriptionCard,
                                    ),
                                    Expanded(
                                      child: colorCard,
                                    )
                                  ],
                                ))),
                        const Expanded(flex: 1, child: SizedBox()),
                      ],
                    ),
                  ),
                ],
              ),
            ),
    );
  }
}
