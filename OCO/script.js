// Fetch data from your GitHub Pages JSON file
async function fetchData() {
    try {
        // Use your actual GitHub Pages URL
        const response = await fetch('https://your-username.github.io/my-data-project/data.json');
        
        if (!response.ok) {
            throw new Error(HTTP error! status: ${response.status});
        }
        
        const data = await response.json();
        displayData(data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('output').innerHTML = 
            '<p>Error loading data. Please check the console.</p>';
    }
}

function displayData(data) {
    const output = document.getElementById('output');
    output.innerHTML = 
        <h2>Numbers: ${data.numbers.join(', ')}</h2>
        <p>User ID: ${data.userId}</p>
        <p>Scores: ${data.scores.join(', ')}</p>
        <p>Average: ${calculateAverage(data.numbers)}</p>
    ;
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return (sum / numbers.length).toFixed(2);
}

// Load data when page loads
fetchData();