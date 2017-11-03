import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Radar from 'react-native-radar';

export default class LocationHandler extends Component {

  state = {
    userId: 1
  }
  componentDidMount() {
    debugger
    // identify the user and request permissions
    Radar.setUserId(this.state.userId);
    Radar.requestPermissions(true);

    // track the user's location once in the foreground
    Radar.trackOnce().then((result) => {
      // do something with result.events, result.user.geofences
      debugger
    }).catch((err) => {
      // optionally, do something with err
    });

    // start tracking the user's location in the background
    Radar.startTracking();
  }

}

// receive events
Radar.on('events', (result) => {
  console.log(result.events)
  // do something with result.events
});
Radar.on('error', (err) => {
  // do something with err
  console.log(err)
});
