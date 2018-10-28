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
  FlatList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import { WebView } from 'react-native-webview-crossplatform'
export default class webview extends Component<Props> {
    constructor(props){
        super(props);
    }


  render() {
    return (
      <View style={styles.container}>
          <WebView
              source={{ uri: 'https://infinite.red/react-native' }}
              style={{ marginTop: 20 }}
              onLoadProgress={e=>console.log(e.nativeEvent.progress)}
              onShouldStartLoadWithRequest={(e)=> {
                  console.log('拦截', e)
                  return true
              }}
              renderError={()=> {
                  return <View>
                      <Text>我是错误页面</Text>
                  </View>
              }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
