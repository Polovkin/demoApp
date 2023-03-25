import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
const App = () => {
  console.log(1);
  const [message, setMessage] = React.useState('');
  return (
    <View>
      <Button
        title="Hello to the tester"
        onPress={() => {
          setTimeout(() => {
            setMessage('RELEASE@');
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

/*
firebase appdistribution:distribute app-release.apk --app 1:654554769471:android:fadfe23abe25c214a7b08a
 \
--release-notes "Refactoring to questions module" \ \
--groups "testers"
*/
