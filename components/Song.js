import React, { Component } from 'react';
import { Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, View, ScrollView, ListItem } from 'react-native';

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      item: props.item,
      editable: props.editable,
    };

    this.onVote = this.onVote.bind(this);

  }

  onVote(newItem) {
    newItem.upVotes = parseInt(newItem.upVotes) + 1;
    this.setState({item: newItem});

    this.props.handler(newItem)
  }

  render() {
    return (
      <View style={styles.item}>
        { this.state.editable ?
          (
            <View>
              { (this.state.index == 0 || this.state.index == 1) &&
                <TouchableOpacity>
                  <Text style={styles.nowPlaying}>
                    { this.state.index }
                    { this.state.index == 0 && ' -  Now Playing: ' }
                    { this.state.index == 1 && ' - Playing next: '} {this.state.item.name}
                  </Text>
                </TouchableOpacity>
              }
                       
              { (this.state.index != 0 && this.state.index != 1) &&
                <TouchableOpacity 
                  style={styles.voteButton}
                  onPress={(item) => this.onVote(this.state.item)}>
                            
                  <Text>
                    {this.state.item.name} - {this.state.item.upVotes.toString()} votes
                  </Text>
                </TouchableOpacity>
              }

            </View>
          )
        :
          ( <Text style={styles.text}>{item.name}</Text> )
        }
      </View>
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
    borderWidth: 1,
  },

  voteButton: {
  },
  nowPlaying: {
    color: '#0000ff'
  }

})
  