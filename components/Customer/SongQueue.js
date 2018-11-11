import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, ScrollView  } from 'react-native';

var songList = require("./spotify_boston_tracks.json");

export default class SongQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songList
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            songList.tracks.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },   
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
  