import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoItem = ({ item }) => {
  const { deleteTodo, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.item);
  const handleSave = () => {
    updateTodo(item._id, { item: editText });
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${item.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <input 
          type="checkbox" 
          className="todo-checkbox"
          checked={item.completed} 
          onChange={() => updateTodo(item._id, { completed: !item.completed })} 
        />
        
        <div className="todo-content">
          {isEditing ? (
            <input 
              className="edit-input"
              value={editText} 
              onChange={(e) => setEditText(e.target.value)} 
              autoFocus
            />
          ) : (
            <span className="todo-text">{item.item}</span>
          )}
        </div>
      </div>
      
      <div className="actions">
        <button className="btn-edit" onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn-delete" onClick={() => deleteTodo(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;