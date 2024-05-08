async function sendCommand() {
    const commandInput = document.getElementById('commandInput').value;
    const response = await fetch('/command', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ command: commandInput })
    });
  
    const data = await response.json();
    displayOutput(data.output);
  }
  
  function displayOutput(output) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = output;
  }
  