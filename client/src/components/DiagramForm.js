import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiagramForm = () => {
  const [text, setText] = useState("");
  const [wordData, setWordData] = useState(null);
  const [maxFrequencyWord, setMaxFrequencyWord] = useState("");

  // Kadane's Algorithm to find the word with max frequency
  const findMaxFrequencyWord = (wordFreq) => {
    let maxFreq = -1;
    let maxWord = "";
    
    // Kadane's algorithm logic
    for (const word in wordFreq) {
      if (wordFreq[word] > maxFreq) {
        maxFreq = wordFreq[word];
        maxWord = word;
      }
    }
    
    return maxWord;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate word frequency
    const words = text.split(" ").reduce((acc, word) => {
      word = word.toLowerCase(); // Convert to lowercase for consistency
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    // Find the word with the max frequency
    const maxWord = findMaxFrequencyWord(words);
    setMaxFrequencyWord(maxWord);

    // Prepare chart data
    const chartData = {
      labels: Object.keys(words),
      datasets: [
        {
          label: "Word Frequency",
          data: Object.values(words),
          backgroundColor: "rgba(75,192,192,0.4)",
        },
      ],
    };

    setWordData(chartData);
  };

  return (
    <div className="diagram-form">
    <h1>Text Frquency Counter</h1>
    {maxFrequencyWord && (
        <div className="max-frequency-word">
          <h3>Word with Maximum Frequency: {maxFrequencyWord}</h3>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to analyze"
        />
        <button type="submit">Generate Stats</button>
      </form>

      {wordData && (
        <div className="chart-output">
          <h3>Word Frequency Chart:</h3>
          <Bar data={wordData} />
        </div>
      )}
    </div>
  );
};

export default DiagramForm;
