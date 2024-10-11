import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

const cafeterias = [
  { id: '1', name: 'Cafeteria A' },
  { id: '2', name: 'Cafeteria B' },
  { id: '3', name: 'Cafeteria C' },
];

const concessions = [
  { id: '1', name: 'Concession A', cafeteriaId: '1' },
  { id: '2', name: 'Concession B', cafeteriaId: '1' },
  { id: '3', name: 'Concession C', cafeteriaId: '2' },
  { id: '4', name: 'Concession D', cafeteriaId: '3' },
];

const FilterMenuScreen = ({ navigation }) => {
  const [selectedCafeterias, setSelectedCafeterias] = useState([]);
  const [selectedConcessions, setSelectedConcessions] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  const [cafeteriaSearch, setCafeteriaSearch] = useState('');
  const [concessionSearch, setConcessionSearch] = useState('');

  const toggleCafeteriaSelection = (cafeteriaId) => {
    setSelectedCafeterias((prev) =>
      prev.includes(cafeteriaId)
        ? prev.filter((id) => id !== cafeteriaId)
        : [...prev, cafeteriaId]
    );
    setSelectedConcessions([]); 
  };

  const toggleConcessionSelection = (concessionId) => {
    setSelectedConcessions((prev) =>
      prev.includes(concessionId)
        ? prev.filter((id) => id !== concessionId)
        : [...prev, concessionId]
    );
  };

  const handleFilter = () => {
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    navigation.navigate('Menu', {
      selectedCafeterias,
      selectedConcessions,
      minPrice: isNaN(minPrice) ? null : minPrice,
      maxPrice: isNaN(maxPrice) ? null : maxPrice,
    });
  };

  const displayedConcessions = selectedCafeterias.length > 0
    ? concessions.filter((concession) => selectedCafeterias.includes(concession.cafeteriaId))
    : concessions;

  const filteredCafeterias = cafeterias.filter((cafeteria) =>
    cafeteria.name.toLowerCase().includes(cafeteriaSearch.toLowerCase())
  );

  const filteredConcessions = displayedConcessions.filter((concession) =>
    concession.name.toLowerCase().includes(concessionSearch.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Cafeterias</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Cafeterias..."
        placeholderTextColor="#999"
        value={cafeteriaSearch}
        onChangeText={setCafeteriaSearch}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {filteredCafeterias.map((cafeteria) => (
          <TouchableOpacity
            key={cafeteria.id}
            style={[styles.filterButton, selectedCafeterias.includes(cafeteria.id) && styles.activeFilter]}
            onPress={() => toggleCafeteriaSelection(cafeteria.id)}
          >
            <Image
              source={{ uri: 'https://via.placeholder.com/60' }}
              style={styles.image}
            />
            <Text style={styles.filterText}>{cafeteria.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Concessions</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Concessions..."
        placeholderTextColor="#999"
        value={concessionSearch}
        onChangeText={setConcessionSearch}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {filteredConcessions.map((concession) => {
          const cafeteria = cafeterias.find(cafeteria => cafeteria.id === concession.cafeteriaId);
          return (
            <TouchableOpacity
              key={concession.id}
              style={[styles.filterButton, selectedConcessions.includes(concession.id) && styles.activeFilter]}
              onPress={() => toggleConcessionSelection(concession.id)}
            >
              <Image
                source={{ uri: 'https://via.placeholder.com/60' }}
                style={styles.image}
              />
              <Text style={styles.filterText}>{concession.name}</Text>
              <Text style={styles.cafeteriaText}>{cafeteria?.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* <TextInput
        style={styles.input}
        placeholder="Price Range (e.g., 5-20)"
        placeholderTextColor="#999"
        value={priceRange}
        onChangeText={setPriceRange}
      /> */}

      <TouchableOpacity style={styles.applyButton} onPress={handleFilter}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  scrollContainer: {
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
    width: 80,
  },
  activeFilter: {
    backgroundColor: 'rgb(174,12,46)',
  },
  filterText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  cafeteriaText: {
    color: '#ccc',
    fontSize: 10,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FilterMenuScreen;
