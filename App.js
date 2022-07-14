import { View } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import Header from './src/components/Header';
import TodoList from "./src/components/TodoList";


export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Купити молоко'},
    {id: 2, title: 'Купити Хліб'},
    {id: 3, title: 'Купити Морозиво'},
    {id: 4, title: 'Купити Пельметоси'},
  ]);

  const addNewTodo = (todoTitle) => {
    setTodos([...todos, { id: uuid.v4(), title: todoTitle }])
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todoId !== todo.id))
  }

  return (
    <View>
      <Header />
      <View>
        <TodoList
          todos={todos}
          addNewTodo={addNewTodo}
          deleteTodo={deleteTodo}
        />
      </View>
    </View>
  );
}
