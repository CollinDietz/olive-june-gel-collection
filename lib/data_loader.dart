import 'dart:convert';
import 'package:flutter/services.dart';
import 'models/nail_polish.dart';

Future<List<NailPolish>> loadNailPolishData() async {
  final String jsonString =
      await rootBundle.loadString('assets/data/gel_polishes.json');
  final List<dynamic> jsonData = json.decode(jsonString);
  return jsonData.map((item) => NailPolish.fromJson(item)).toList();
}
