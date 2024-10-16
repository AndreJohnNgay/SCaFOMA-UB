import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Alert,
	Image,
	TouchableOpacity,
	ScrollView,
} from 'react-native'
import { useProfileBackend } from '../../Contexts/BackendContext'

const ProfileScreen = () => {
	const {} = useProfileBackend()
	// Sample user data
	const [firstName, setFirstName] = useState('John')
	const [lastName, setLastName] = useState('Doe')
	const [email, setEmail] = useState('johndoe@example.com')
	const [profileImage, setProfileImage] = useState(
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s'
	)

	return (
		<View style={styles.screenContainer}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.title}>Profile Screen</Text>

				<TouchableOpacity
					onPress={handleChangeProfileImage}
					style={styles.profileImageContainer}>
					<Image
						source={{ uri: profileImage }}
						style={styles.profileImage}
					/>
				</TouchableOpacity>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>First Name:</Text>
					<TextInput
						style={styles.input}
						value={firstName}
						onChangeText={setFirstName}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Last Name:</Text>
					<TextInput
						style={styles.input}
						value={lastName}
						onChangeText={setLastName}
					/>
				</View>

				<View style={styles.inputContainer}>
					<Text style={styles.label}>Email:</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
					/>
				</View>
			</ScrollView>

			<View style={styles.buttonContainer}>
				<View style={styles.buttonWrapper}>
					<Button
						title="Edit Profile"
						onPress={handleEditProfile}
						color="rgb(174,12,46)"
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<Button
						title="Logout"
						onPress={handleLogout}
						color="#FF5722"
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		padding: 20,
		backgroundColor: '#2c2c2c',
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		textAlign: 'center',
	},
	profileImageContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#fff',
		marginBottom: 10,
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		fontSize: 16,
		color: '#fff',
		marginBottom: 5,
	},
	input: {
		height: 40,
		borderColor: '#fff',
		borderWidth: 1,
		paddingHorizontal: 10,
		borderRadius: 5,
		color: '#fff',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 20,
	},
	buttonWrapper: {
		flex: 1,
		marginHorizontal: 5,
	},
})

export default ProfileScreen
