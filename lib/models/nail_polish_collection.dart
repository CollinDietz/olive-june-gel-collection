import 'package:olive_june_gel_collection/models/nail_polish.dart';

class NailPolishCollection {
  List<NailPolish> polishes;

  NailPolishCollection({required this.polishes});

  factory NailPolishCollection.fromJson(List<dynamic> json) {
    return NailPolishCollection(
        polishes: json.map((item) => NailPolish.fromJson(item)).toList());
  }

  factory NailPolishCollection.fromCollectionWithRelated(
      NailPolishCollection collection, List<RelatedPolish> relatedPolishes) {
    return NailPolishCollection(
      polishes: collection.polishes
          .where((p) => relatedPolishes.any((r) => r.id == p.id))
          .toList(),
    );
  }

  List<NailPolish> get getPolishes => polishes;
}
