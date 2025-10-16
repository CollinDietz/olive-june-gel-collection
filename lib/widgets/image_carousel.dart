import 'package:flutter/material.dart';

import '../models/nail_polish.dart';

class ImageCarousel extends StatefulWidget {
  final NailPolish nailPolish;

  const ImageCarousel({super.key, required this.nailPolish});

  @override
  State<ImageCarousel> createState() => _ImageCarouselState();
}

class _ImageCarouselState extends State<ImageCarousel> {
  late final PageController _pageController;
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
    return Column(
      children: [
        Center(
          child: SizedBox(
            height: 600,
            child: PageView.builder(
              controller: _pageController,
              itemCount: widget.nailPolish.images.length,
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
                    widget.nailPolish.images[index],
                    fit: BoxFit.contain,
                    width: double.infinity,
                  ),
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
              itemCount: widget.nailPolish.images.length,
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
                        widget.nailPolish.images[index],
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
  }
}
