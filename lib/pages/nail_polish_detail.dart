import 'package:flutter/material.dart';
import 'package:olive_june_gel_collection/models/nail_polish.dart';

class NailPolishDetailPage extends StatefulWidget {
  final NailPolish polish;

  const NailPolishDetailPage({
    required this.polish,
    super.key,
  });

  @override
  _NailPolishDetailPageState createState() => _NailPolishDetailPageState();
}

class _NailPolishDetailPageState extends State<NailPolishDetailPage> {
  late PageController _pageController;
  int _currentIndex = 0;

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final polish = widget.polish;
    final images = polish.images;
    final screenWidth = MediaQuery.of(context).size.width;

    final isMobile = screenWidth < 600;

    final imageCarousel = Column(
      children: [
        SizedBox(
          height: 300,
          child: PageView.builder(
            controller: _pageController,
            itemCount: images.length,
            onPageChanged: (index) {
              setState(() {
                _currentIndex = index;
              });
            },
            itemBuilder: (_, index) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  images[index],
                  fit: BoxFit.contain,
                  width: double.infinity,
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 10),
        Center(
          child: SizedBox(
            height: 80,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: images.length,
              itemBuilder: (_, index) {
                final isSelected = index == _currentIndex;
                return GestureDetector(
                  onTap: () {
                    _pageController.animateToPage(
                      index,
                      duration: const Duration(milliseconds: 300),
                      curve: Curves.easeInOut,
                    );
                  },
                  child: Container(
                    margin: const EdgeInsets.symmetric(horizontal: 6),
                    padding: EdgeInsets.all(isSelected ? 2 : 0),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: isSelected ? Colors.pink : Colors.grey.shade300,
                        width: 2,
                      ),
                    ),
                    child: ClipOval(
                      child: Image.asset(
                        images[index],
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ),
      ],
    );

    final description = Padding(
      padding: const EdgeInsets.all(16.0),
      child: Text(
        polish.description ?? 'No description available.',
        style: const TextStyle(fontSize: 16),
      ),
    );

    return Scaffold(
      appBar: AppBar(title: Text(polish.name)),
      body: SingleChildScrollView(
        child: isMobile
            ? Column(
                children: [
                  imageCarousel,
                  description,
                ],
              )
            : Padding(
                padding: const EdgeInsets.all(24),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Expanded(flex: 1, child: const SizedBox()),
                    Expanded(flex: 3, child: imageCarousel),
                    Expanded(
                        flex: 2,
                        child: Column(
                          children: [
                            const SizedBox(height: 20),
                            description,
                            const SizedBox(height: 20),
                          ],
                        )),
                    const Expanded(flex: 1, child: const SizedBox()),
                  ],
                ),
              ),
      ),
    );
  }
}
