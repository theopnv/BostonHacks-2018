import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, ScrollView  } from 'react-native';

export default class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks
    };

  }

  render() {
    return (
        <ScrollView>
          {
            this.state.tracks.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
 }

})
  