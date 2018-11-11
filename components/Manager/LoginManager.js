import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

export default class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
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
            style={styles.submit}
            onPress={this.submit}
            title="Submit"
            color="#000"
          />
          
        </View>
    );
  }

  submit() {
    this.props.navigation.navigate('ManagerQueue');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    top: 30,
    width: 250,
    marginBottom: 50
  },
  submit: {
  }

})
  