import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator,} from 'react-navigation'
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import HomeScreen from './home/homeScreen';
import DetailScreen from './Detail/detail';
import ModalScreen from "./Detail/modalScreen";
import settingScreen from "./setting/settingScreen";
import LoginScreen from "./login/login";
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    }
});

const tabConfig = {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: true,
        showIcon: true,
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
    },

};

const stackConfig = {
    transitionConfig: (()=>({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })),
    headerMode: 'none'
}

const tabNavigator = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: '首页',
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;

            }
        })

    },
    Settings: {
        screen: settingScreen,
        navigationOptions: ({navigation}) => ({
            title: '设置',
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const iconName = `ios-options${focused ? '' : '-outline'}`;
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;

            }
        })
    }
}


const TabStack = createBottomTabNavigator(
    tabNavigator,
    tabConfig
);

const AuthStack = createStackNavigator({ SignIn: LoginScreen }, {headerMode: 'none'});

const AppStack = createStackNavigator({
    Tabs: TabStack,
    Details: DetailScreen,
},
);

const AppNavigator = createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
},
    {
    initialRouteName: 'Auth'
}
    );

class root extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <AppNavigator/>
        )
    }
}

export default root