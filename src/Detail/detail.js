import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
class DetailScreen extends Component{
    static navigationOptions = ({navigation})=> {
        return {
            title: navigation.state.params.title
        }
    }

    constructor(props){
        super(props);
        const params = this.props.navigation.state.params;
        this.state={
            id: params.itemId,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>详情页{this.state.id}</Text>
                <Button
                    title='点击去详情'
                    onPress={()=> this.props.navigation.push('Details')}
                />
                <Button
                    title='点击去首页'
                    onPress={()=> this.props.navigation.navigate('Home')}
                />
                <Button
                    title='Go back'
                    onPress={()=> this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default DetailScreen