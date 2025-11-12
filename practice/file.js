const fs = require('fs'); // 파일 시스템 모듈 불러오기

// 파일 쓰기 (writeFileSync : 동기 방식)
fs.writeFileSync('text.txt', 'Node.js Start!');

// 파일 읽기 (readFileSync : 동기 방식)
const data = fs.readFileSync('text.txt', 'utf-8');

console.log('파일 내용', data);


