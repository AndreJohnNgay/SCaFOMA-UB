import { useState } from 'react'

export const Profile = () => {
	const [firstName, setFirstName] = useState('John')
	const [lastName, setLastName] = useState('Doe')
	const [email, setEmail] = useState('johndoe@example.com')
	const [profileImage, setProfileImage] = useState(
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s'
	)

	const handleChangeProfileImage = () => {
		Alert.alert('Change Profile Image', 'This feature is not implemented yet.')
	}

	const handleEditChanges = () => {
		Alert.alert('Profile Edited', 'Your profile has been updated successfully!')
	}

	const handleLogout = () => {
		Alert.alert('Logged Out', 'You have been logged out successfully!')
	}

	return {
		handleChangeProfileImage,
		handleEditChanges,
		handleLogout,
	}
}
