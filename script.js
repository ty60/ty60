document.addEventListener("DOMContentLoaded", () => {
    if (location.hash === "") {
        return;
    }
    const node = document.getElementById(location.hash.slice(1));
    if (node !== null) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    }
});