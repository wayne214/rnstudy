import React, {Component} from 'react';
import {View, Text, StyleSheet,Button, AsyncStorage} from 'react-native';
import {SafeAreaView} from 'react-navigation'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
class LogoTitle extends React.Component {
    render() {
        return (
            <Text>
                哈哈
            </Text>
        );
    }
}

class HomeScreen extends Component{

    constructor(props){
        super(props)
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>首页</Text>
                <Button
                    title='点击'
                    onPress={()=> this.props.navigation.navigate('Details', {
                        itemId: 123456,
                        title: '详情页'
                    })}
                />
                <Button
                    title='Go to ModalScreen'
                    onPress={()=> this.props.navigation.navigate('Modal', {
                        itemId: 123456,
                        title: '详情页'
                    })}
                />
                <Button
                    title='Login out'
                    onPress={this._signOutAsync}
                />
            </SafeAreaView>
        )
    }
}

export default HomeScreen