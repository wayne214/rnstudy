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
const dataarray=['AI应用场景','AI基础支持','AI通用应用','hah', 'll']
type Props = {};
export default class gridview extends Component<Props> {
    constructor(props){
        super(props);
    }

    renderItem(){
        return (
            <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
                <Text>测试数据</Text>
            </View>
        )
    }
    itemSeparatorComponent() {
        return(
            <View style={{width: 100, height: 2, backgroundColor: 'blue'}}/>
        )
    }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={dataarray}
            renderItem={this.renderItem.bind(this)}
            numColumns={3}
            itemSeparatorComponent={this.itemSeparatorComponent}
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
