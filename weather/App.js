import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.blue}> Weather 2.0</Text>
        <Button
          style={{ backgroundColor: 'blue'}}
          large icon={{ name: 'envira', type: 'font-awesome' }}
          title='Click me to go next' />
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    fontSize: 30,
    color: "blue",
    fontFamily: "Times New Roman"
  },

  
});
