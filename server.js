// server.js
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/metrics') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ONLINE',
            hostname: os.hostname(),
            platform: os.platform(),
            uptime_seconds: Math.floor(os.uptime()),
            free_memory_mb: Math.floor(os.freemem() / 1024 / 1024),
            total_memory_mb: Math.floor(os.totalmem() / 1024 / 1024),
            cpu_load: os.loadavg()
        }));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Servidor Cloud Activo');
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server running on cloud port');
});