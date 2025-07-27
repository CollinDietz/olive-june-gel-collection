import 'package:flutter/material.dart';
import '../models/nail_polish.dart';
import '../data_loader.dart';
import 'nail_polish_detail.dart';

class NailPolishGridPage extends StatelessWidget {
  const NailPolishGridPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Gel Polish Collection")),
      body: FutureBuilder<List<NailPolish>>(
        future: loadNailPolishData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }

          final items = snapshot.data ?? [];

          return GridView.builder(
            padding: const EdgeInsets.all(10),
            gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
              maxCrossAxisExtent: 200, // max width of each tile
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              childAspectRatio: 3 / 4, // width : height
            ),
            itemCount: items.length,
            itemBuilder: (context, index) {
              final polish = items[index];
              return GestureDetector(
                onTap: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => NailPolishDetailPage(polish: polish),
                  ),
                ),
                child: Card(
                  child: Column(
                    children: [
                      Expanded(
                        child: Image.asset(
                          polish.images[0],
                          fit: BoxFit.cover,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Text(polish.name,
                            style:
                                const TextStyle(fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
