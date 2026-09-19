function convertMarkdown() {
    const markdownInput = document.getElementById("markdown-input");
    if (!markdownInput) return "";
    let text = markdownInput.value;

    text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
    text = text.replace(/^##\s+(.*)$/gm, "<h2>$2</h2>".replace("$2", "$1"));
    text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
    text = text.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
    text = text.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
    text = text.replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

    text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");
    text = text.replace(/\*(?!\*)(.*?)\*/g, "<em>$1</em>");
    text = text.replace(/_(?!_)(.*?)_/g, "<em>$1</em>");

    return text;
}

document.addEventListener("DOMContentLoaded", () => {
    const markdownInput = document.getElementById("markdown-input");
    const htmlOutput = document.getElementById("html-output");
    const preview = document.getElementById("preview");

    if (markdownInput) {
        markdownInput.addEventListener("input", () => {
            const converted = convertMarkdown();
            if (htmlOutput) htmlOutput.textContent = converted;
            if (preview) preview.innerHTML = converted;
        });
    }
});