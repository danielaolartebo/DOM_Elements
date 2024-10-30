export function createToast(element) {
    // Create an empty <div> element
    const toastDiv = document.createElement('div');
    
    toastDiv.className = 'toast';
    
    toastDiv.style.position = 'fixed';
    toastDiv.style.top = '20px';
    toastDiv.style.right = '20px';
    
    // Append the provided element as a child of the toast div
    toastDiv.appendChild(element);
    
    return toastDiv;
}
