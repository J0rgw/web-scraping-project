# Web Scraping Project

This project is a web scraping application that allows users to input a URL and an XPath expression to fetch and display specific HTML content from the provided URL. The application is built using HTML, JavaScript, and styled with Tailwind CSS.

## Project Structure

```
web-scraping-project
├── src
│   ├── index.html         # Main HTML structure of the application
│   ├── script.js          # JavaScript logic for web scraping functionality
│   ├── styles
│   │   └── input.css      # Tailwind CSS import and custom styles
│   └── output.css         # Compiled CSS styles
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd web-scraping-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Build the CSS**:
   ```
   npm run build-css
   ```

4. **Start the development server**:
   ```
   npm start
   ```

## Usage Guidelines

1. Open the application in your web browser.
2. Enter the desired URL in the input field.
3. Provide the XPath expression to specify the content you want to scrape.
4. Click the "Scrape" button to fetch the content.
5. The results will be displayed below the form in a user-friendly format.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.