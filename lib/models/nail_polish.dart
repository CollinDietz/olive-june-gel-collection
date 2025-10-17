class RelatedPolish {
  final String id;
  final String color;

  RelatedPolish({
    required this.id,
    required this.color,
  });

  factory RelatedPolish.fromJson(Map<String, dynamic> json) {
    return RelatedPolish(
      id: json['id'] ?? '',
      color: json['color'] ?? '',
    );
  }
}

class NailPolish {
  final String id;
  final String variantId;
  final String name;
  final String price;
  final String url;
  final bool isNew;
  final String color;
  final String colorKind;
  final String undertone;
  final String finishType;
  final String colorDescription;
  final String season;
  final String productId;
  final String description;
  final List<String> images;
  final String thumbNailImage;
  final List<RelatedPolish> relatedCollectionPolishes;

  NailPolish({
    required this.id,
    required this.variantId,
    required this.name,
    required this.price,
    required this.url,
    required this.isNew,
    required this.color,
    required this.colorKind,
    required this.undertone,
    required this.finishType,
    required this.colorDescription,
    required this.season,
    required this.productId,
    required this.description,
    required this.images,
    required this.relatedCollectionPolishes,
    required this.thumbNailImage,
  });

  factory NailPolish.fromJson(Map<String, dynamic> json) {
    return NailPolish(
      id: json['id'] ?? '',
      variantId: json['variantId'] ?? '',
      name: json['name'] ?? '',
      price: json['price'] ?? '',
      url: json['url'] ?? '',
      isNew: json['isNew'] ?? false,
      color: json['color'] ?? '',
      colorKind: json['color_kind'] ?? '',
      undertone: json['undertone'] ?? '',
      finishType: json['finishType'] ?? '',
      colorDescription: json['colorDescription'] ?? '',
      season: json['season'] ?? '',
      productId: json['productId'] ?? '',
      description: json['description'] ?? '',
      thumbNailImage: json['thumbNailImage'] ?? '',
      images: List<String>.from(json['images'] ?? []),
      relatedCollectionPolishes:
          (json['relatedCollectionPolishes'] as List<dynamic>? ?? [])
              .map((e) => RelatedPolish.fromJson(e as Map<String, dynamic>))
              .toList(),
    );
  }
}
