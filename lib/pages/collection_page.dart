import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/widgets/filter_drawer.dart';
import 'package:olive_june_gel_collection/widgets/polish_grid.dart';
import 'package:olive_june_gel_collection/models/nail_polish_collection.dart';

class CollectionPage extends StatefulWidget {
  final NailPolishCollection collection;

  const CollectionPage({
    super.key,
    required this.collection,
  });

  @override
  State<CollectionPage> createState() => _CollectionPageState();
}

class _CollectionPageState extends State<CollectionPage> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  void _openEndDrawer() {
    _scaffoldKey.currentState!.openEndDrawer();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: const Text("Olive & June Gel Polish Collection Tracker"),
        actions: [
          IconButton(
            icon: const Icon(Icons.filter_alt),
            onPressed: _openEndDrawer,
          )
        ],
      ),
      body: PolishGrid(collection: widget.collection),
      endDrawer: FilterDrawer(),
      endDrawerEnableOpenDragGesture: false,
    );
  }
}
