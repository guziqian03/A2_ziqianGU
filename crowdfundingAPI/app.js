const express = require('express');
const app = express();
const port = 3000;

// 路由模块
const fundraiserRoutes = require('./routes/fundraisers');

// 中间件
app.use(express.json());

// 使用路由
app.use('/api/fundraisers', fundraiserRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});