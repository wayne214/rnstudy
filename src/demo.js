/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
    TouchableOpacity
} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const dataarray=['AI应用场景','AI基础支持','AI通用应用','hah', 'll']
type Props = {};
export default class demo extends Component<Props> {
    constructor(props){
        super(props);
        console.log('constructor');
        this.openCalendar = this.openCalendar.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    openCalendar(){
        const eventConfig = {
            title: '注意事项',
            startDate: '2018-09-25T08:00:00.000Z',
            endDate: '2018-09-25T10:00:00.000Z',
            location: '北京三里屯',
            allDay: true,
            notes: '和刘德华进行会面',
            description: '和刘德华进行会面'
            // and other options
        };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
                // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
                // These are two different identifiers on iOS.
                // On Android, where they are both equal and represent the event id, also strings.
                // when { action: 'CANCELLED' } is returned, the dialog was dismissed
                console.warn(JSON.stringify(eventInfo));
            })
            .catch((error: string) => {
                // handle error such as when user rejected permissions
                console.warn(error);
            });
    };


  render() {
    return (
      <View style={styles.container}>
          <Text>测试一下</Text>
          <TouchableOpacity onPress={()=> {
              console.log('打印了吗');
              this.openCalendar()
          }}>
              <Text>打开日历</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
