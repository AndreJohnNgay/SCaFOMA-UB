import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const concessionsData = [
  { id: '1', name: 'Pizza Place' },
  { id: '2', name: 'Burger Joint' },
  { id: '3', name: 'Sushi Bar' },
  { id: '4', name: 'Coffee Corner' },
  { id: '5', name: 'Ice Cream Parlor' },
];

const ConcessionsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(concessionsData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(concessionsData);
    } else {
      const filtered = concessionsData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search concessions..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.concessionItem}>
            <Text style={styles.concessionText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  concessionItem: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
  },
  concessionText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ConcessionsScreen;
