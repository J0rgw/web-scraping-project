// filepath: /web-scraping-project/web-scraping-project/src/script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scrape-form');
    const urlInput = document.getElementById('url-input');
    const xpathInput = document.getElementById('xpath-input');
    const resultsContainer = document.getElementById('results');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const url = urlInput.value;
        const xpath = xpathInput.value;

        if (!url || !xpath) {
            alert('Please enter both a URL and an XPath.');
            return;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const result = document.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
            let node = result.iterateNext();
            let results = '';

            while (node) {
                results += `<div class="result-item">${node.outerHTML}</div>`;
                node = result.iterateNext();
            }

            if (results) {
                resultsContainer.innerHTML = results;
            } else {
                resultsContainer.innerHTML = '<p>No results found.</p>';
            }
        } catch (error) {
            console.error('Error fetching or parsing the URL:', error);
            resultsContainer.innerHTML = '<p>Error fetching or parsing the URL. Please check the console for more details.</p>';
        }
    });
});