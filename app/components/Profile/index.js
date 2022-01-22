import { Text, View, ScrollView } from 'react-native';
import ProfileTabBar from '../../Navigation/profileTab';
import Entypo from 'react-native-vector-icons/Entypo';
import { ProfileBody, ProfileButtons } from './ProfileBody';

const Profile = () => {
	let circuls = [];
	let numberofcircels = 10;

	for (let index = 0; index < numberofcircels; index++) {
		circuls.push(
			<View key={index}>
				{index === 0 ? (
					<View
						style={{
							width: 60,
							height: 60,
							borderRadius: 100,
							borderWidth: 1,
							opacity: 0.7,
							marginHorizontal: 5,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
					</View>
				) : (
					<View
						style={{
							width: 60,
							height: 60,
							borderRadius: 100,
							backgroundColor: 'black',
							opacity: 0.1,
							marginHorizontal: 5,
						}}></View>
				)}
			</View>,
		);
	}
	return (
		<View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
			<View style={{ width: '100%', padding: 10 }}>
				<ProfileBody
					name="Mohd Amir"
					accountName="md_amir"
					profileImage={require('../../../assets/profile/profile_image.jpeg')}
					followers="3.6M"
					following="35"
					post="458"
				/>
				<ProfileButtons
					id={0}
					name="Mohd Amir"
					accountName="md_amir"
					profileImage={require('../../../assets/profile/profile_image.jpeg')}
				/>
			</View>
			<View>
				<Text
					style={{
						padding: 10,
						letterSpacing: 1,
						fontSize: 14,
					}}>
					Story Highlights
				</Text>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{
						paddingVertical: 5,
						paddingHorizontal: 10,
					}}>
					{circuls}
				</ScrollView>
			</View>
			<ProfileTabBar />
		</View>
	)
};


export default Profile;
