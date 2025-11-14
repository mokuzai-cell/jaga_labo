// server.js (backend フォルダ内)
const express = require('express');
const cors = require('cors'); // CORSをインポート
const app = express();
const port = 3000;

let counter=0;

// Vueアプリ (例: http://localhost:5173) からのアクセスを許可する
app.use(cors()); 

// APIエンドポイント
app.get('/api/message', (req, res) => {
  res.json({ message: 'こんにちは！Node.js (pnpm) からです！' });
});

app.get('/api/plus',(req,res)=>{
    counter++;
    res.json({count:counter});
});

// サーバー起動
app.listen(port, () => {
  console.log(`バックエンドサーバーが http://localhost:${port} で起動しました`);
});