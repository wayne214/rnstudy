import React, {Component} from 'react';
import {View, Text, StyleSheet,Button, TextInput, AsyncStorage} from 'react-native';
import {createStackNavigator} from 'react-navigation'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


class login extends Component{


    constructor(props){
        super(props);
        this.state={
            phone: 12345678904,
            password: 12345,
        }
    }

    loginIn = async() => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>欢迎光临</Text>
                <TextInput
                  value={this.state.phone}
                  onChangeText={(phone)=>{
                      this.setState({
                          phone
                      })
                  }}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password)=>{
                        this.setState({
                            password
                        })
                    }}
                />
                <Button
                    title='登录'
                    onPress={this.loginIn}
                />
            </View>
        )
    }
}

export default login