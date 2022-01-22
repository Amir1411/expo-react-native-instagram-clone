import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const ProfileTabBar = () => {

	const windowWidth = Dimensions.get('window').width;
	const Tab = createMaterialTopTabNavigator();

	let squares = [];

	const postInfo = [
		{
			postTitle: 'Shubham',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post1.jpg'),
			likes: 765,
			isLiked: true,
		},
		{
			postTitle: 'Jojo',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post2.jpg'),
			likes: 345,
			isLiked: false,
		},
		{
			postTitle: 'Amir',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post3.jpg'),
			likes: 734,
			isLiked: false,
		},
		{
			postTitle: 'Jojo',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post4.jpg'),
			likes: 875,
			isLiked: false,
		},
		{
			postTitle: 'Shubham',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post5.jpg'),
			likes: 765,
			isLiked: true,
		},
		{
			postTitle: 'Jojo',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post6.jpg'),
			likes: 345,
			isLiked: false,
		},
		{
			postTitle: 'Amir',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post7.jpg'),
			likes: 734,
			isLiked: false,
		},
		{
			postTitle: 'Jojo',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post8.jpg'),
			likes: 875,
			isLiked: false,
		},
		{
			postTitle: 'Jojo',
			postPersonImage: require('../../assets/profile/profile_image.jpeg'),
			postImage: require('../storage/images/post9.jpg'),
			likes: 875,
			isLiked: false,
		}
	];

	for (let index = 0; index < postInfo.length; index++) {
		squares.push(
			<View key={index}>
				<View
					style={{
						width: windowWidth/3 - 1,
						height: 150,
						marginVertical: 1.5,
						// backgroundColor: 'black',
						// opacity: 0.1,
					}}>
						<Image
							source={postInfo[index].postImage}
							style={{ width: '100%', height: '100%' }}
						/>
					</View>
			</View>,
		);
	}

	const Posts = () => {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					width: '100%',
					height: '100%',
				}}>
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'white',
						flexWrap: 'wrap',
						flexDirection: 'row',
						paddingVertical: 2.5,
						justifyContent: 'space-between',
					}}>
					{squares}
				</View>
			</ScrollView>
		);
	};
	const Video = () => {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					width: '100%',
					height: '100%',
				}}>
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'white',
						flexWrap: 'wrap',
						flexDirection: 'row',
						paddingVertical: 5,
						justifyContent: 'space-between',
					}}>
					{squares}
				</View>
			</ScrollView>
		);
	};
	const Tags = () => {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					width: '100%',
					height: '100%',
				}}>
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'white',
						flexWrap: 'wrap',
						flexDirection: 'row',
						paddingVertical: 5,
						justifyContent: 'space-between',
					}}>
					{squares}
				</View>
			</ScrollView>
		);
	};

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				tabBarIndicatorStyle: {
					backgroundColor: 'black',
					height: 1.5,
				},
				tabBarIcon: ({ focused, colour }) => {
					let iconName;
					if (route.name === 'Posts') {
						iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
						colour = focused ? 'black' : 'gray';
					} else if (route.name === 'Video') {
						iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
						colour = focused ? 'black' : 'gray';
					} else if (route.name === 'Tags') {
						iconName = focused ? 'ios-person' : 'ios-person-outline';
						colour = focused ? 'black' : 'gray';
					}

					return <Ionic name={iconName} color={colour} size={22} />;
				},
			})}>
			<Tab.Screen name="Posts" component={Posts} />
			<Tab.Screen name="Video" component={Video} />
			<Tab.Screen name="Tags" component={Tags} />
		</Tab.Navigator>
	);
};

export default ProfileTabBar;