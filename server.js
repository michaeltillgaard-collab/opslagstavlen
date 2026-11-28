import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use(express.static(__dirname));

app.use((req, res) => {
  if (req.method === 'GET' && !path.extname(req.path)) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  res.status(404).send('Not found');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
