const express = require('express');
const path = require('path');

const app = express();

// Serve all static files from current directory
app.use(express.static(__dirname));

// SPA fallback - serve index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Frontend server running on port ' + PORT);
});
