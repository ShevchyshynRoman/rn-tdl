import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({
  todo,
  deleteTodo,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteTodo(todo.id)}
    >
      <Text style={styles.title}>
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    fontSize: 16,
  },
});
