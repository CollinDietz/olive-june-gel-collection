import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/models/nail_polish.dart';
import 'package:olive_june_gel_collection/widgets/image_carousel.dart';

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
    final imageCarousel = ImageCarousel(nailPolish: polish);

    final description = Padding(
      padding: const EdgeInsets.all(16.0),
      child: Text(
        polish.description,
        style: const TextStyle(fontSize: 16),
      ),
    );

    return Scaffold(
      appBar: AppBar(title: Text(polish.name)),
      body: SingleChildScrollView(
        child: isMobile
            ? Column(
                children: [
                  imageCarousel,
                  description,
                ],
              )
            : Padding(
                padding: const EdgeInsets.all(24),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Expanded(flex: 1, child: SizedBox()),
                    Expanded(flex: 3, child: imageCarousel),
                    Expanded(
                        flex: 2,
                        child: Column(
                          children: [
                            const SizedBox(height: 20),
                            description,
                            const SizedBox(height: 20),
                          ],
                        )),
                    const Expanded(flex: 1, child: SizedBox()),
                  ],
                ),
              ),
      ),
    );
  }
}
