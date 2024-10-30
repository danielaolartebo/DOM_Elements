export function isElementVisible(element) {
    // Check if element is null or undefined
    if (!element) return false;

    // Ensure the element is part of the DOM
    if (!document.body.contains(element)) return false;

    // Check if the element has visible dimensions
    return element.offsetHeight > 0 && element.offsetWidth > 0;
}
