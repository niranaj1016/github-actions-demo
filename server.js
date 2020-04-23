const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const port = 3000;
server.listen(port);

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.info('\n\n*********** STARTING service **************');
  console.info(`Web server listening at: ${bind}`);
};
server.on('error', onError);
server.on('listening', onListening);