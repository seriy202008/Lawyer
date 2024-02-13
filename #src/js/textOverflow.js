export function textOvf(element, number) {
    let text = element.textContent;
    if (text.length > number + 1) {
        element.textContent = text.slice(0, number) + '...';
    }

}