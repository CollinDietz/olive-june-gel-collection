class NailPolish {
  final String name;
  final String description;
  final List<String> images;

  NailPolish({
    required this.name,
    required this.description,
    required this.images,
  });

  factory NailPolish.fromJson(Map<String, dynamic> json) {
    return NailPolish(
      name: json['name'],
      description: json['description'] ?? '',
      images: List<String>.from(json['images'] ?? []),
    );
  }
}
