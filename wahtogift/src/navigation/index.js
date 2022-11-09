//IMPORT NAVIGATION LIBS
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS
import MaterialCommuniyIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS
import Dashboard from '../screens/dashboard';
import Test from '../screens/dashboard/test'
import Favorites from '../screens/favorites';
import Gifts from '../screens/gifts';
import Profile from '../screens/profile';

import Login from '../screens/account/Login';
import Signup from '../screens/account/Signup';
import Verify from '../screens/account/Verify';

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
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
    )
}

//CREATE FAVORITES STACK
const FavoritesStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoritesStackNavigator.Navigator>
            <FavoritesStackNavigator.Screen name='favorite' component={Favorites} />
            <FavoritesStackNavigator.Screen name='test' component={Test} />
        </FavoritesStackNavigator.Navigator>
    )
}

//CREATE GIFTS STACK
const GiftsStackNavigator = createNativeStackNavigator();
export const GiftsStack = () => {
    return(
        <GiftsStackNavigator.Navigator>
            <GiftsStackNavigator.Screen name='gifts' component={Gifts} />
            <GiftsStackNavigator.Screen name='test' component={Test} />
        </GiftsStackNavigator.Navigator>
    )
}

//CREATE PROFILE STACK
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileStack = () => {
    return(
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen name='profile' component={Profile} />
            <ProfileStackNavigator.Screen name='test' component={Test} />
        </ProfileStackNavigator.Navigator>
    )
}

//CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name='dashboardTab' component={DashboardStack}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommuniyIcons name='view-dashboard' size={28} />)}} />  
            <AppTab.Screen name='favoritesTab' component={FavoriteStack}
                options={{ tabBarLabel: 'Favorites', tabBarIcon: () => (<MaterialCommuniyIcons name='view-grid' size={28} />)}} />  
            <AppTab.Screen name='giftsTab' component={GiftsStack}
                options={{ tabBarLabel: 'Gifts', tabBarIcon: () => (<MaterialCommuniyIcons name='gift-outline' size={28} />)}} />  
            <AppTab.Screen name='profileTab' component={ProfileStack}
                options={{ tabBarLabel: 'Profile', tabBarIcon: () => (<MaterialCommuniyIcons name='view-grid' size={28} />)}} />  
        </AppTab.Navigator>
    )
}
