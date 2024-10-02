import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
import { useAuth } from '../../Contexts/BackendContext'

const LoginScreen = ({ navigation }) => {
	const Auth = useAuth()

	const handleLogin = () => {
		Auth.login()
	}

	const handleForgotPassword = () => {
		navigation.navigate('ForgotPassword')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>

			<TextInput
				style={styles.input}
				placeholder="Email"
				placeholderTextColor="#999"
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				placeholderTextColor="#999"
				secureTextEntry
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.linkButton}
				onPress={handleForgotPassword}>
				<Text style={styles.linkText}>Forgot Password?</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#2c2c2c',
		padding: 20
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 40,
		textAlign: 'center'
	},
	input: {
		backgroundColor: '#444',
		color: '#fff',
		borderRadius: 8,
		padding: 15,
		marginBottom: 20
	},
	button: {
		backgroundColor: 'rgb(174,12,46)',
		padding: 15,
		borderRadius: 8,
		alignItems: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold'
	},
	linkButton: {
		marginTop: 20,
		alignItems: 'center'
	},
	linkText: {
		color: 'rgb(174,12,46)',
		fontSize: 16,
		textDecorationLine: 'underline'
	}
})

export default LoginScreen
