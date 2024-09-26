import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddItemModal = ({ visible, onClose, onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemSizes, setItemSizes] = useState([{ size: '', price: '' }]); // Array to hold sizes and prices
  const [image, setImage] = useState(null);

  const handleAddSize = () => {
    setItemSizes([...itemSizes, { size: '', price: '' }]);
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...itemSizes];
    newSizes[index].size = value;
    setItemSizes(newSizes);
  };

  const handlePriceChange = (index, value) => {
    const newSizes = [...itemSizes];
    newSizes[index].price = value;
    setItemSizes(newSizes);
  };

  const handleSubmit = () => {
    const newItem = {
      name: itemName,
      sizes: itemSizes.filter(item => item.size && item.price), // Filter out empty sizes or prices
      image,
    };
    onAddItem(newItem);
    clearForm();
    onClose();
  };

  const clearForm = () => {
    setItemName('');
    setItemSizes([{ size: '', price: '' }]); // Reset to one size field
    setImage(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Add New Menu Item</Text>

        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.buttonText}>{image ? 'Change Image' : 'Select Image'}</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

        <TextInput
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
          style={styles.input}
        />

        <Text style={styles.sizesTitle}>Sizes and Prices:</Text>
        <ScrollView>
          {itemSizes.map((item, index) => (
            <View key={index} style={styles.sizeContainer}>
              <TextInput
                placeholder={`Size ${index + 1}`}
                value={item.size}
                onChangeText={(value) => handleSizeChange(index, value)}
                style={styles.sizeInput}
              />
              <TextInput
                placeholder="₱ Price"
                value={item.price}
                onChangeText={(value) => handlePriceChange(index, value)}
                keyboardType="numeric"
                style={styles.priceInput}
              />
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.addSizeButton} onPress={handleAddSize}>
          <Text style={styles.buttonText}>Add Size</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  sizesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sizeInput: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  priceInput: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '30%',
  },
  imageButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 15,
  },
  addSizeButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddItemModal;
