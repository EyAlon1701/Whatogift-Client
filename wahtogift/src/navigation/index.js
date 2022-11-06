//IMPORT NAVIGATION LIBS
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS
import MaterialCommuniyIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS
import Dashboard from '../screens/dashboard';
import Favorites from '../screens/favorites';
import Gifts from '../screens/gifts';
import Profile from '../screens/profile';

//CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name='dashboardTab' component={Dashboard}
                options={{ tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommuniyIcons name='view-dashboard' size={28} />)}} />  
            <AppTab.Screen name='favoritesTab' component={Favorites}
                options={{ tabBarLabel: 'Favorites', tabBarIcon: () => (<MaterialCommuniyIcons name='view-grid' size={28} />)}} />  
            <AppTab.Screen name='giftsTab' component={Gifts}
                options={{ tabBarLabel: 'Gifts', tabBarIcon: () => (<MaterialCommuniyIcons name='gift-outline' size={28} />)}} />  
            <AppTab.Screen name='profileTab' component={Profile}
                options={{ tabBarLabel: 'Profile', tabBarIcon: () => (<MaterialCommuniyIcons name='view-grid' size={28} />)}} />  
        </AppTab.Navigator>
    )
}
