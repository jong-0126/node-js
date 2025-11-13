const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Todo Api'))

let todos = [
  { id: 1, text: 'Node.js 배우기', done: false },
  { id: 2, text: 'Express 연습하기', done: true },
];

// 전체 조회
app.get('/todos', (req, res) => {
    res.json(todos);
});

// 단일 조회
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message : 'Todo not found'});
    res.json(todo);
});

// 추가
app.post('/todos', (req, res) => {
    const newTodos = {
        id : Date.now(),
        text : req.body.text,
        done: false,
    };
    todos.push(newTodos);
    res.status(201).json(newTodos);
});

// 수정
app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message: 'Todo not found'});

    todo.text = req.body.text ?? todo.text;
    todo.done = req.body.done ?? todo.done;
    res.json(todo);
});

// 삭제
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.json({message : '삭제 완료'});
})