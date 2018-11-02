import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'
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
    static navigationOptions = {
        title: '首页',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTitle: <LogoTitle/>,
        headerRight: (
            <Button
                title='info'
                color='#fff'
                onPress={()=> alert('this is button')}
            />
        )
    }

    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
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
            </View>
        )
    }
}

export default HomeScreen