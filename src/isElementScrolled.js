export function isElementScrolled(element) {
    // If element is null or undefined, return an object with null values
    if (!element) {
        return {
            scrollTop: null,
            scrollLeft: null,
            isScrolled: null,
        };
    }

    // Get the scroll position
    const scrollTop = element.scrollTop;
    const scrollLeft = element.scrollLeft;

    // Check if the element has been scrolled horizontally or vertically
    const isScrolled = scrollTop > 0 || scrollLeft > 0;

    // Return the object with scroll data
    return {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft,
        isScrolled: isScrolled,
    };
}