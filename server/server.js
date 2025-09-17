require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// ヘルスチェック
app.get('/health', (_, res) => res.send('ok'));

// React の build 配信
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// ポート起動
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
