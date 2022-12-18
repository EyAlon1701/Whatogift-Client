//IMPORT NAVIGATION LIBS
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Colors from '../utilis/AppColors';

//IMPORT ICONS
import MaterialCommuniyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//IMPORT SCREENS
import Dashboard, {screenOptions as DashboardScreenOptions} from '../screens/dashboard';
import Test from '../screens/dashboard/test'
import Favorites from '../screens/favorites';
import Gifts from '../screens/gifts';
import Profile from '../screens/profile';

import Login from '../screens/account/Login';
import Signup from '../screens/account/Signup';
import Verify from '../screens/account/Verify';

const defualtOptions = {
    headerStyle: { backgroundColor: Colors.dark_blue },
    headerTintColor: Colors.white
}

//CREATE ACCOUNT STACK
const AccountStackNavigator = createNativeStackNavigator();
export const AccountStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name='login' component={Login} />
            <DashboardStackNavigator.Screen name='signup' component={Signup} />
            <DashboardStackNavigator.Screen name='verify' component={Verify} />
        </DashboardStackNavigator.Navigator>
    )
}

//CREATE DASHBOARD STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator screenOptions={defualtOptions}>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} options={DashboardScreenOptions} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
    )
}

//CREATE FAVORITES STACK
const FavoritesStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoritesStackNavigator.Navigator screenOptions={defualtOptions}>
            <FavoritesStackNavigator.Screen name='favorite' component={Favorites} />
            <FavoritesStackNavigator.Screen name='test' component={Test} />
        </FavoritesStackNavigator.Navigator>
    )
}

//CREATE GIFTS STACK
const GiftsStackNavigator = createNativeStackNavigator();
export const GiftsStack = () => {
    return(
        <GiftsStackNavigator.Navigator screenOptions={defualtOptions}>
            <GiftsStackNavigator.Screen name='gifts' component={Gifts} />
            <GiftsStackNavigator.Screen name='test' component={Test} />
        </GiftsStackNavigator.Navigator>
    )
}

//CREATE PROFILE STACK
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileStack = () => {
    return(
        <ProfileStackNavigator.Navigator screenOptions={defualtOptions}>
            <ProfileStackNavigator.Screen name='profile' component={Profile} />
            <ProfileStackNavigator.Screen name='test' component={Test} />
        </ProfileStackNavigator.Navigator>
    )
}

//CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator activeColor={Colors.ocean} inactiveColor={Colors.black} barStyle={{backgroundColor:Colors.white}}>
            <AppTab.Screen name='dashboardTab' component={DashboardStack}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: ({color}) => (<MaterialCommuniyIcons name='view-dashboard' color={color} size={28} />)}} />  
            <AppTab.Screen name='favoritesTab' component={FavoriteStack}
                options={{ tabBarLabel: 'Favorites', tabBarIcon: ({color}) => (<MaterialIcons name='favorite' color={color} size={28} />)}} />  
            <AppTab.Screen name='giftsTab' component={GiftsStack}
                options={{ tabBarLabel: 'Gifts', tabBarIcon: ({color}) => (<MaterialCommuniyIcons name='gift-outline' color={color} size={28} />)}} />  
            <AppTab.Screen name='profileTab' component={ProfileStack}
                options={{ tabBarLabel: 'Profile', tabBarIcon: ({color}) => (<MaterialCommuniyIcons name='account' color={color} size={28} />)}} />  
        </AppTab.Navigator>
    )
}
