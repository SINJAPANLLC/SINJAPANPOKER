const express = require('express');
const path = require('path');
const app = express();

// ヘルスチェック用
app.get('/health', (_, res) => res.send('ok'));

// React のビルド成果物を返す
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Render の推奨ポート (10000)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
