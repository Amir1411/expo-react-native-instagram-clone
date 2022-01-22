import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Feather from 'react-native-vector-icons/Feather';

import { data } from './data';
import ReelsComponent from './Reels';

const Reels = () => {
	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleChangeIndexValue = ({ index }) => {
		setCurrentIndex(index);
	};

	return (
		<View
			style={{
				width: windowWidth,
				height: windowHeight,
				backgroundColor: 'white',
				position: 'relative',
				backgroundColor: 'black',
			}}>
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					flexDirection: 'row',
					justifyContent: 'space-between',
					zIndex: 1,
					padding: 10,
				}}>
				<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
					Reels
				</Text>
				<Feather name="camera" style={{ fontSize: 25, color: 'white' }} />
			</View>

			<SwiperFlatList
				vertical={true}
				onChangeIndex={handleChangeIndexValue}
				data={data}
				renderItem={({ item, index }) => (
					<ReelsComponent item={item} index={index} currentIndex={currentIndex} />
				)}
				keyExtractor={(item, index) => index}
			/>
		</View>
	);
};

export default Reels;