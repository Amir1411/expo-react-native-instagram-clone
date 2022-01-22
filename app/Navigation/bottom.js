import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';

import Home from '../components/Home';
import Search from '../components/Search';
import Reels from '../components/Reels';
import Notification from '../components/Notification';
import Profile from '../components/Profile';
import Status from '../components/Status';
import FriendProfile from '../components/FriendProfile';
import EditProfile from '../components/Profile/EditProfile';

const App = () => {
	const Stack = createNativeStackNavigator();

	const Tab = createBottomTabNavigator();

	const bottomTabScreen = () => {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: false,
					headerShown: false,
					tabBarStyle: {
						height: 50,
					},

					tabBarIcon: ({ focused, size, colour }) => {
						let iconName;
						if (route.name === 'Home') {
							iconName = focused ? 'home-sharp' : 'home-outline';
							size = focused ? size + 8 : size + 2;
						} else if (route.name === 'Search') {
							iconName = focused ? 'search' : 'ios-search-outline';
						} else if (route.name === 'Reels') {
							iconName = focused
								? 'caret-forward-circle'
								: 'caret-forward-circle-outline';
						} else if (route.name === 'Notification') {
							iconName = focused ? 'ios-heart' : 'ios-heart-outline';
						} else if (route.name === 'Profile') {
							iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
						}

						return <Ionic name={iconName} size={size} color={colour} />;
					},
				})}>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Reels" component={Reels} />
				<Tab.Screen name="Notification" component={Notification} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator>
		);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Bottom" component={bottomTabScreen} />
				<Stack.Screen name="Status" component={Status} />
				<Stack.Screen name="FriendProfile" component={FriendProfile} />
				<Stack.Screen name="EditProfile" component={EditProfile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;