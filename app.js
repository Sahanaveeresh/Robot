const express = require('express');
const bodyParser = require('body-parser');
const { handleCommand } = require('./commands');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API endpoint to handle incoming commands
app.post('/command', (req, res) => {
  const command = req.body.command;
  const output = handleCommand(command);
  res.json({ output }); // Send the output in the response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
