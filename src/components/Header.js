import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Список справ
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: 'silver',
    height: 100
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
  }
});
