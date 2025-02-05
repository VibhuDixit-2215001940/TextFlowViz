# TextFlowViz

## 🚀 Welcome to TextFlowViz!

TextFlowViz is an innovative web application that turns your text into insightful visual representations. With a simple text input, you can generate word frequency charts and diagrams that help analyze and understand the content better. Whether you're analyzing blog posts, articles, or any written text, TextFlowViz can visually summarize the most frequent words and even create flow diagrams based on your input.

---

## 🧠 How We Find the Most Frequent Word

In **TextFlowViz**, we use **Kadane's Algorithm** to find the word with the highest frequency in the provided text.

### Why Kadane's Algorithm?

Kadane's Algorithm is typically used to find the maximum sum subarray in an array of numbers, but we adapted the same concept for word frequency analysis. 

### The Process:
1. **Text Splitting**: We split the text into individual words.
2. **Frequency Calculation**: We calculate how many times each word appears.
3. **Kadane's Adaptation**: We apply Kadane's approach to track the word with the highest frequency, ensuring the most frequent word is efficiently found in a single pass through the word frequencies.
4. **Display**: The most frequent word is then displayed in the word frequency chart.

This efficient approach allows us to quickly determine and highlight the most common word in any given text.

---


## ✨ Sneak Peek

### **Word Frequency Chart**
Generate a bar chart to visualize the frequency of words in the given text.

![Word Frequency Chart](https://github.com/user-attachments/assets/a9bdaf49-68d3-4987-8a95-a303564e5aaf)


### **Text-to-Diagram Generator -- Under Process 😅😅😅😅**
Transform your text into a flow diagram that gives a visual summary of your content.



---

## ⚡ Features

- **Text Input**: Simply enter any text, and the app does the magic!
- **Word Frequency Analysis**: See which words appear most in your text with an intuitive bar chart.
- **Dynamic Flow Diagrams**: Generate flow diagrams representing the structure of your text.
- **Interactive & Responsive**: Fully responsive web app that works on all screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Chart.js
- **Backend**: Node.js (Optional for future features)
- **Libraries**: `mermaid.js`, `chart.js`
- **CSS**: Styled-components / CSS modules for styling

---
## 🎯 How It Works

- **Step 1**: Input your text into the provided text box.
- **Step 2**: Click on the "Generate Diagram" button to visualize the flow diagram of your text.
- **Step 3**: Click on "Generate Stats" to see a word frequency bar chart representing your text's most common words.

---

## 💡 Contributing

We love contributions! If you want to improve or add new features, feel free to fork the repository and submit a pull request.

### How to Contribute:
1. Fork the repo
2. Create a new branch
3. Make your changes
4. Commit your changes and push to your fork
5. Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For any queries, feel free to reach out to me via:

- Email: vibhudixit88@gmail.com
- LinkedIn: [Vibhu Dixit](https://www.linkedin.com/in/vibhu-dixit-b42a11251/)
