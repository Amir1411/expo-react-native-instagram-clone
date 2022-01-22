import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import BottomBar from './app/Navigation/bottom';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<StatusBar hidden />
				<BottomBar />
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
