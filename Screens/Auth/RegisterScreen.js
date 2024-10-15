import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    StyleSheet 
} from 'react-native';

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null); // Placeholder for profile image

    const handleRegister = () => {
        // Registration logic goes here
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            profileImage,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imagePicker} onPress={() => console.log("Pick an image")}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                    <Text style={styles.imagePlaceholder}>Pick a Profile Image</Text>
                )}
            </TouchableOpacity>
            
            <TextInput 
                style={styles.input} 
                placeholder="First Name" 
                value={firstName} 
                onChangeText={setFirstName} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Last Name" 
                value={lastName} 
                onChangeText={setLastName} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address" 
                autoCapitalize="none" 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry 
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2c2c2c',
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    imagePicker: {
        height: 100,
        width: '100%', // Set width to 100% to fill the space
        backgroundColor: '#444',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    imagePlaceholder: {
        color: '#aaa',
        textAlign: 'center',
    },
    input: {
        height: 50,
        width: '100%', // Make inputs full width

        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#444',
        color: '#fff',
    },
    registerButton: {
        backgroundColor: 'rgb(174,12,46)',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Make button full width
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
