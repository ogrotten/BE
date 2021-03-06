require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 14040;
server.listen(PORT, () => {
  console.log(`\n=== Server: ${PORT} ===\n`);
});
