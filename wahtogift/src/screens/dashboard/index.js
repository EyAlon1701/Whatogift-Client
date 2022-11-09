import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../../utilis/AppStyle';

const Dashboard = () => {
    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Dashboard;