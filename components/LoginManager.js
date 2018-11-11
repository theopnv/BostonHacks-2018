import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

export default class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      code:""
    };
    this.submit = this.submit.bind(this);

  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({email: text})}
            placeholder="E-Mail"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({password:text})}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Button
            style={styles.input}
            onPress={this.submit}
            title="Submit"
            color="#841584"
          />
          
        </View>
    );
  }

  submit() {
    console.log(this.state.email);
    console.log(this.state.password);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 250,
    margin: 50
  },

})
  