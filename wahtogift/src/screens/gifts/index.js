import React, {useState} from 'react';
import {View, Text, Button , TouchableOpacity} from 'react-native';
import Style from '../../utilis/AppStyle';
import {Slider} from '@miblanchard/react-native-slider';
import Tags from 'react-native-tags';

const Gifts = () => {

    const evenstList = [
        {name: 'wedding'},
        {}
    ]

    const [gender, setGender] = useState(null);
    const [budgetRange, setBudgetRange] = useState({}); //Object min max
    const [events, setEvents] = useState([]); //Collection
    const [interest, setInterest] = useState([]); //Collection
    const [age, setAge] = useState(0);
    const [locationRadius, setLocationRadius] = useState({});
    const [related, setRelated] = useState(1); //Add label


    return(
        <View style={Style.container}>
            <Slider
                value={related}
                step={1}
                maximumValue={5}
                onValueChange={value => setRelated(value)} />
            <Text>Value: {related}</Text>
        </View>
    )
}

export default Gifts;