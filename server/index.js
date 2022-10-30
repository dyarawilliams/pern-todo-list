const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Use .env file in config folder
// require("dotenv").config();

// Middleware 
app.use(cors());
app.use(express.json()); // Allows us to get req.body

// Routes

// @desc Create a todo 
// @route GET /todos
app.post("/todos", async (req, res) => {
    try {
        // console.log(req.body)
        const { description } = await req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// @desc Get all todo 
// @route GET /todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");

        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// @desc Get a single todo 
// @route GET /todos/:id
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", 
            [id]
        );

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// @desc Update a todo 
// @route GET /
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", 
            [description, id]
        );

        res.json("Todo was updated");
    } catch (err) {
        console.error(err);
    }
})

// @desc Delete a todo 
// @route GET /
app.delete("/todos/:id", async (req, res) => {
    try {
        const  { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted")
    } catch (err) {
        console.error(err)
    }
})

app.listen(5000, () => {
    console.log("Server is listening on PORT 5000")
});