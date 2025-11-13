let todos = [
  { id: 1, text: 'Node.js 배우기', done: false },
  { id: 2, text: 'Express 연습하기', done: true },
];

exports.getAll = (req, res) => res.json(todos);

exports.getOne = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message: 'Todo not found'});
    res.json(todo);
};

exports.create = (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
        done: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.update = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message: 'Todo not found'});
    todo.text = req.body.text ?? todo.text;
    todo.done = req.body.done ?? todo.done;
    res.json(done);
};

exports.remove = (req, res) => {
    todo = todos.filter(t => t.id !== parseInt(req.params.id));
    res.json({message: '삭제 완료'});
}