import { createContext, useState, useEffect, useContext } from 'react';
import { todoService } from '../api/todoService';

const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const res = await todoService.getAll();
        setTodos(res.data);
      } catch (err) { console.error("Fetch error:", err); }
    };
    loadTodos();
  }, []);

  const addTodo = async (item) => {
    try {
      const res = await todoService.create(item);
      setTodos([...todos, res.data.data]);
    } catch (err) { console.error("Add error:", err); }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.delete(id);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      alert("Failed to delete the task. Try again later.");
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      const res = await todoService.update(id, updatedData);
      setTodos(todos.map(t => t._id === id ? res.data.data : t));
    } catch (err) {
      alert("Update failed. Could not sync with server.");
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);