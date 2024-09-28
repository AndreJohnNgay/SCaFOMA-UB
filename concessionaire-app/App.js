import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './Screens/Auth/LoginScreen';
import RegisterScreen from './Screens/Auth/RegisterScreen';
import ForgotPasswordScreen from './Screens/Auth/ForgotPasswordScreen';
import OrdersScreen from './Screens/Orders/OrdersScreen';
import ConcessionScreen from './Screens/Concession/ConcessionScreen';
import ScanQRScreen from './Screens/ScanQR/ScanQRScreen';
import GraphsScreen from './Screens/Graphs/GraphsScreen';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import ViewOrderScreen from './Screens/Orders/ViewOrderScreen';
import ViewMenuItemScreen from './Screens/Concession/ViewMenuItemScreen';
import AddItemScreen from './Screens/Concession/AddItemScreen';
import AddItemSizesPricesScreen from './Screens/Concession/AddItemSizesPricesScreen';
import AddItemVariationsScreen from './Screens/Concession/AddItemVariationsScreen';
import AddItemAddOnsScreen from './Screens/Concession/AddItemAddOnsScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgb(174,12,46)',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#2c2c2c' },
      }}
    >
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Concession"
        component={ConcessionScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="cash" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="ScanQR"
        component={ScanQRScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="qr-code" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Graphs"
        component={GraphsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="bar-chart" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="" component={} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ViewOrder" component={ViewOrderScreen} />
        <Stack.Screen name="ViewMenuItem" component={ViewMenuItemScreen} />
        <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
        <Stack.Screen name="AddItemSizesPrices" component={AddItemSizesPricesScreen} />
        <Stack.Screen name="AddItemVariations" component={AddItemVariationsScreen} />
        <Stack.Screen name="AddItemAddOns" component={AddItemAddOnsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
