import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
const App = () => {
  const [message, setMessage] = React.useState('');
  return (
    <View>
      <Button
        title="Hello to the tester"
        onPress={() => {
          setTimeout(() => {
            setMessage('Hello Tester');
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: 'Arial',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default App;
