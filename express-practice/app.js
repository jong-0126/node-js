const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('홈페이지 입니다.');
});

app.get('/about', (rea, res) => {
    res.send('소개 페이지 입니다.');
});

app.get('/contact', (req, res) => {
    res.send('문의 페이지 입니다.')
})

app.listen(3000, () => {
    console.log('Express Server Running');
})