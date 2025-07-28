import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/models/nail_polish_collection.dart';
import 'package:olive_june_gel_collection/pages/detail_page.dart';
import 'package:olive_june_gel_collection/widgets/polish_grid_card.dart';

class PolishGrid extends StatefulWidget {
  final NailPolishCollection collection;

  const PolishGrid({Key? key, required this.collection}) : super(key: key);

  @override
  State<PolishGrid> createState() => _PolishGridState();
}

class _PolishGridState extends State<PolishGrid> {
  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      padding: const EdgeInsets.all(10),
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 200,
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
        childAspectRatio: 3 / 4,
      ),
      itemCount: widget.collection.getPolishes.length,
      itemBuilder: (BuildContext context, int index) {
        final polish = widget.collection.polishes[index];
        return GestureDetector(
            onTap: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => DetailPage(polish: polish),
                  ),
                ),
            child: PolishGridCard(nailPolish: polish));
      },
    );
  }
}
