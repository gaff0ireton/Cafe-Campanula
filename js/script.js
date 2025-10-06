async function includeHTML(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            element.innerHTML = "読み込みエラー: " + file;
        }
    } catch (error) {
        element.innerHTML = "通信エラー: " + file;
    }
}