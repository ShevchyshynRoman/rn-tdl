import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


export default function Form({
  addNewTodo,
}) {
  const [inputText, setInputText] = useState('');

  const onButtonPress = () => {
    if (inputText) {
      addNewTodo(inputText);
      setInputText('');
    }
    if (!inputText) {
      alert('Write some title')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter title here'
        value={inputText}
        onChangeText={setInputText}
      />

    <View
      style={styles.button}
    >
      <Button
        title='Add new todo'
        onPress={onButtonPress}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input:{
    width: '80%',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    height: 50,
    borderWidth: 1,
  },
  button: {
    alignSelf: 'center',
    width: '80%',
  }
});
