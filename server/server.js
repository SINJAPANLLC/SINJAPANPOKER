const mongoose = require('mongoose');

// MongoDB 接続
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));
const express = require('express');
const path = require('path');
const app = express();

// ヘルスチェック
app.get('/health', (_, res) => res.send('ok'));

// React のビルド成果物を返す
app.use(express.static(path.join(__dirname, '../client/build')));

// キャッチオール（Reactルーター用）
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Render の推奨ポート
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
