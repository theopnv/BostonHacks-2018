import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, ScrollView  } from 'react-native';
import Queue from './../Queue';

var songList = require("../spotify_boston_tracks.json");

export default class CustomerQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: songList.tracks
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <Queue tracks={this.state.tracks} editable={true} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

})
  