import 'package:olive_june_gel_collection/models/nail_polish.dart';

class NailPolishCollection {
  List<NailPolish> polishes;

  NailPolishCollection({required this.polishes});

  factory NailPolishCollection.fromJson(List<dynamic> json) {
    return NailPolishCollection(
        polishes: json.map((item) => NailPolish.fromJson(item)).toList());
  }

  List<NailPolish> get getPolishes => polishes;
}
