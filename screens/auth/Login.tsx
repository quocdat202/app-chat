import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Button } from '@rneui/themed';

import { StatusBar } from 'expo-status-bar';
export default function Login({ navigation }: RootTabScreenProps<'TabOne'>) {
	const onPress = () => {
		console.log("abc");
	}
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/images/chat.png")} />
			<View style={styles.container}>
				<StatusBar style="auto" />
				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Email."
						placeholderTextColor="#003f5c"
					// onChangeText={(email) => setEmail(email)}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.TextInput}
						placeholder="Password."
						placeholderTextColor="#003f5c"
						secureTextEntry={true}
					// onChangeText={(password) => setPassword(password)}
					/>
				</View>
				<TouchableOpacity>
					<Text style={styles.forgot_button}>Forgot Password?</Text>
				</TouchableOpacity>

			</View>
			<Button
				title="Log in"
				loading={false}
				loadingProps={{ size: 'small', color: 'white' }}
				buttonStyle={{
					backgroundColor: 'rgba(111, 202, 186, 1)',
					borderRadius: 5,
				}}
				titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
				containerStyle={{
					marginHorizontal: 50,
					height: 50,
					width: 200,
					marginVertical: 10,
				}}
				onPress={() => onPress()}
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},

	image: {
		marginBottom: 40,
		marginTop: 40,
		width: 70,
		height: 70,
	},
	inputView: {
		backgroundColor: "#FFC0CB",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 20,
		alignItems: "center",
	},
	TextInput: {
		width: 300,
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	forgot_button: {
		height: 30,
		marginBottom: 30,
	},

	loginText: {

	}
});
