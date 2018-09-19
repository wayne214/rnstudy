/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    AppState
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const dataarray=['AI应用场景','AI基础支持','AI通用应用',]
type Props = {};
export default class App extends Component<Props> {
    componentDidMount() {
        AppState.addEventListener("change", (newState) => {
            newState === "active" && CodePush.sync();
        });

    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.levelOne}>
            <Text>人工智能</Text>
        </View>
        <View style={{marginLeft: 70, flexDirection: 'row'}}>
            <View>
                {
                    dataarray.map((index, item)=> {
                        return <View style={{height: 240, width: 2, backgroundColor: 'red'}}/>
                    })
                }
            </View>
            <View>
                {
                    dataarray.map((item, index) => {
                        return(
                            <View>
                                  <View style={[styles.levelSecContainer,{height: 50}]}>
                                      <View style={{height: 2, width: 47, backgroundColor: 'red'}}/>
                                      <View style={styles.levelOne}>
                                          <Text>{item}</Text>
                                      </View>
                                  </View>
                                <View style={{marginLeft: 120, flexDirection: 'row'}}>
                                    <View>
                                        {
                                            dataarray.map((item, index)=> {
                                                return <View style={{height: index === dataarray.length - 1 ? 25 : 50, width: 2, backgroundColor: 'red'}}/>
                                            })
                                        }
                                    </View>
                                    <View>
                                        {
                                            dataarray.map((item, index) => {
                                                return(
                                                    <View>
                                                        <View style={[styles.levelSecContainer, {height: 50}]}>
                                                            <View style={{height: 2, width: 47, backgroundColor: 'red'}}/>
                                                            <View style={styles.levelOne}>
                                                                <Text>{item}</Text>
                                                            </View>
                                                        </View>

                                                    </View>


                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </View>


                        )
                    })
                }
            </View>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    levelOne: {
        width: 140,
        height: 47,
        backgroundColor: '#e6f2fb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    levelSecContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
    }
});
