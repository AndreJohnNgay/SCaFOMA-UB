import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView } from 'react-native';

const AddItemSizesPricesScreen = ({ navigation, route }) => {
  const { newItem, onAddItem } = route.params;
  const [itemSizes, setItemSizes] = useState([{ size: '', price: '' }]); 

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
    const filteredSizes = itemSizes.filter(item => item.size && item.price); 
    const updatedItem = {
      ...newItem,
      sizes: filteredSizes,
    };

    onAddItem(updatedItem);
    navigation.goBack(); 
  };

  const renderSizeItem = ({ item, index }) => (
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
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.content}>
        <Text style={styles.title}>Add Sizes and Prices for {newItem.name}</Text>
        {newItem.image && (
          <Image source={{ uri: newItem.image }} style={styles.imagePreview} />
        )}

        <Text style={styles.sizesTitle}>Sizes and Prices:</Text>

        <FlatList
          data={itemSizes}
          renderItem={renderSizeItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.sizeList}
        />

        <TouchableOpacity style={styles.addSizeButton} onPress={handleAddSize}>
          <Text style={styles.buttonText}>Add Size</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  submitButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddItemSizesPricesScreen;
