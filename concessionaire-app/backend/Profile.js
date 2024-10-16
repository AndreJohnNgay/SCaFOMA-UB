import { useState } from 'react'
import { Alert } from 'react-native'

export const Profile = () => {
	const [firstName, setFirstName] = useState('John')
	const [lastName, setLastName] = useState('Doe')
	const [profileImage, setProfileImage] = useState(
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s'
	)

	const handleChangeProfileImage = () => {
		Alert.alert('Change Profile Image', 'This feature is not implemented yet.')
	}

	const handleEditChanges = () => {
		Alert.alert('Profile Edited', 'Your profile has been updated successfully!')
	}

	return {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		profileImage,
		setProfileImage,
		handleChangeProfileImage,
		handleEditChanges,
	}
}
