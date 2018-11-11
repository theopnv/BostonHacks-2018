import React, { Component } from 'react';
import { Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, View, ScrollView  } from 'react-native';

export default class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks,
      editable: props.editable,
      uniqueValue: 0
    };

    this.onVote = this.onVote.bind(this);

  }

  onVote(item) {
    
    item.upVote++;
    this.setState({uniqueValue: uniqueValue + 1});
  }

  render() {
    return (
          <ScrollView style={styles.container}>
            {
              this.state.tracks.map((item, index) => (
                <View key={index} style={styles.item}>
                  { this.state.editable ?
                    (
                      <View>
                        { index == 0 &&
                          <TouchableOpacity 
                            onPress={(item) => this.onVote(item)}>
                            <Text style={styles.nowPlaying}>
                              Now Playing: {item.name}
                            </Text>
                          </TouchableOpacity>
                        }
                        
                        { index != 0 &&
                          <TouchableOpacity 
                            style={styles.voteButton}
                            onPress={(item) => this.onVote(item)}>
                            
                            <Text>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        }

                      </View>
                    )
                  :
                    ( <Text style={styles.text}>{item.name}</Text> )
                  }
                </View>
              ))
            }
          </ScrollView>
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
  