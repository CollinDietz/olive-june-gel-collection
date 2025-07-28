import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/models/nail_polish_collection.dart';
import 'package:olive_june_gel_collection/pages/collection_page.dart';
import 'dart:convert';
import 'package:flutter/services.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  static Future<NailPolishCollection> fetchNailPolishCollection() async {
    final String jsonString =
        await rootBundle.loadString('assets/data/gel_polishes.json');
    final List<dynamic> jsonData = json.decode(jsonString);
    return NailPolishCollection.fromJson(jsonData);
  }

  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FutureBuilder<NailPolishCollection>(
        future: fetchNailPolishCollection(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData) {
            return const Center(child: Text('No data found.'));
          }
          return CollectionPage(collection: snapshot.data!);
        },
      ),
      theme: ThemeData(colorSchemeSeed: Colors.pink),
    );
  }
}
