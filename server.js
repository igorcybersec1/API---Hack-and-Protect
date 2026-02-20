const app = require('./app');
require('dotenv').config();
const https = require('https');
const fs = require('fs');

const PORT = process.env.PORT || 8800;
const options = {

    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT)
}

https.createServer(options, app).listen(PORT, '0.0.0.0', () => {

    console.log(`Servidor rodando na porta ${PORT}`);
});
