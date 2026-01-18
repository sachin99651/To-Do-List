import { useState } from 'react';
import { useTodos } from './context/TodoContext';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const { todos, addTodo } = useTodos();
  const [newTask, setNewTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      await addTodo(newTask);
      setNewTask("");
    } catch (err) {
      alert("Error: API Error.");
    }
  };

  const filteredTodos = todos.filter(t => 
    t.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <h1>To Do List</h1>
        
        <div className="search-container">
          <input 
            type="text"
            className="search-input"
            placeholder="Search your tasks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Write Todo..." 
          />
          <button type="submit">+</button>
        </form>

        <div className="todo-list">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(item => (
              <TodoItem key={item._id} item={item} />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666' }}>No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;