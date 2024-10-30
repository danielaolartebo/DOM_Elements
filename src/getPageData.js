export function getPageData() {
    // Get window dimensions directly
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Get full document dimensions, including compatibility for older browsers
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const documentWidth = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth
    );

    // Current scroll positions from top and left
    const currentScrollFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const currentScrollFromLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    // Return the data in the required format
    return {
        windowHeight,
        windowWidth,
        documentHeight,
        documentWidth,
        currentScrollFromTop,
        currentScrollFromLeft
    };
}


