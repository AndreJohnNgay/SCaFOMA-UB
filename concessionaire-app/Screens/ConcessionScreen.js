import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AddItemModal from '../Components/AddItemModal';

const ConcessionScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    {
      name: 'Hot Dog',
      sizes: [
        { size: 'Regular', price: '50' },
        { size: 'Large', price: '70' },
      ],
      image: null,
    },
    {
      name: 'Burger',
      sizes: [{ size: 'Large', price: '120' }],
      image: null,
    },
    {
      name: 'Fries',
      sizes: [
        { size: 'Small', price: '30' },
        { size: 'Medium', price: '40' },
        { size: 'Large', price: '50' },
      ],
      image: null,
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddItem = (newItem) => {
    setMenuItems(prevItems => [...prevItems, newItem]);
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItemContainer}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      {item.sizes.map((size, index) => (
        <Text key={index} style={styles.menuItemPrice}>
          {size.size}: ₱{size.price}
        </Text>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.viewButton} 
          onPress={() => navigation.navigate('ViewMenuItemScreen', { item })} // Navigate to ViewMenuItemScreen
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item, index) => index.toString()} // Use index as key
        style={styles.menuList}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      {/* Add Item Modal */}
      <AddItemModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddItem={handleAddItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  menuList: {
    marginBottom: 20,
  },
  menuItemContainer: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuItemName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ConcessionScreen;
