import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../../utilis/AppStyle';

const Gifts = () => {
    return(
        <View style={Style.container}>
            <Text>Gifts</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Gifts;