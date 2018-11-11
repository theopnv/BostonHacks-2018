import React, { Component } from 'react';
import { Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, View, FlatList, ScrollView, List  } from 'react-native';
import Song from './Song';

export default class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks,
      editable: props.editable,
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList(item) {
    newTracks = this.state.tracks.sort((a, b) => { 
      return a.upVotes - b.upVotes; })
    this.setState({tracks: newTracks});
  }

  render() {
    return (
        <FlatList
            style={styles.container}
            data={this.state.tracks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => <Song 
              item={item} 
              index={index}
              editable={this.state.editable}
              handler={this.updateList}/>}
          />
    );
  }


}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 0
  }, 
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderWidth: 1,
  },

  voteButton: {
  },
  nowPlaying: {
    color: '#0000ff'
  }

})
  