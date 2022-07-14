import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function TodoList({
  todos,
  addNewTodo,
  deleteTodo,
}) {
  return (
    <View>
      <Form
        addNewTodo={addNewTodo}
      />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
          />
        )}
      />
    </View>
  );
}

