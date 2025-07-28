import 'package:flutter/material.dart';
import '../models/nail_polish.dart';

class PolishGridCard extends StatelessWidget {
  final NailPolish nailPolish;

  const PolishGridCard({super.key, required this.nailPolish});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 3,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: Image(
              image: AssetImage(nailPolish.images[0]),
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              nailPolish.name,
              style: const TextStyle(fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
          ),
        ],
      ),
    );
  }
}
