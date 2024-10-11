import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const initialMenuItems = [
    { 
        id: '1', 
        name: 'Burger', 
        category: 'Food', 
        concessionId: '1', 
        cafeteriaId: '1', 
        price: 10, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession A', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Regular', 'Spicy'], 
        sizes: ['Small', 'Large'],
        addons: ['Extra Cheese', 'Bacon'] 
    },
    { 
        id: '2', 
        name: 'Pizza', 
        category: 'Food', 
        concessionId: '2', 
        cafeteriaId: '1', 
        price: 15, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession B', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Margherita', 'Pepperoni'],
        sizes: ['Medium', 'Large'],
        addons: ['Olives', 'Jalapenos']
    },
    { 
        id: '3', 
        name: 'Soda', 
        category: 'Drink', 
        concessionId: '3', 
        cafeteriaId: '2', 
        price: 3, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession C', 
        cafeteriaName: 'Cafeteria B',
        variations: ['Coke', 'Sprite'],
        sizes: ['Small', 'Large'],
        addons: []
    },
    { 
        id: '4', 
        name: 'Fries', 
        category: 'Food', 
        concessionId: '1', 
        cafeteriaId: '1', 
        price: 5, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession A', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Regular', 'Curly'], 
        sizes: ['Small', 'Large'],
        addons: ['Ketchup', 'Mayo']
    },
    { 
        id: '5', 
        name: 'Chicken Wings', 
        category: 'Food', 
        concessionId: '2', 
        cafeteriaId: '1', 
        price: 12, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession B', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Buffalo', 'BBQ'],
        sizes: ['Small', 'Large'],
        addons: ['Ranch', 'Blue Cheese']
    },
    { 
        id: '6', 
        name: 'Ice Cream', 
        category: 'Dessert', 
        concessionId: '3', 
        cafeteriaId: '2', 
        price: 4, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession C', 
        cafeteriaName: 'Cafeteria B',
        variations: ['Vanilla', 'Chocolate'],
        sizes: ['Cup', 'Cone'],
        addons: ['Sprinkles', 'Chocolate Syrup']
    },
    { 
        id: '7', 
        name: 'Coffee', 
        category: 'Drink', 
        concessionId: '1', 
        cafeteriaId: '2', 
        price: 2, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession A', 
        cafeteriaName: 'Cafeteria B',
        variations: ['Black', 'Latte'],
        sizes: ['Small', 'Medium', 'Large'],
        addons: ['Sugar', 'Cream']
    },
    { 
        id: '8', 
        name: 'Salad', 
        category: 'Food', 
        concessionId: '2', 
        cafeteriaId: '1', 
        price: 8, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession B', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Caesar', 'Greek'],
        sizes: ['Regular', 'Large'],
        addons: ['Croutons', 'Extra Dressing']
    },
    { 
        id: '9', 
        name: 'Milkshake', 
        category: 'Dessert', 
        concessionId: '3', 
        cafeteriaId: '2', 
        price: 6, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession C', 
        cafeteriaName: 'Cafeteria B',
        variations: ['Chocolate', 'Strawberry'],
        sizes: ['Small', 'Large'],
        addons: ['Whipped Cream', 'Cherry on Top']
    },
    { 
        id: '10', 
        name: 'Hot Dog', 
        category: 'Food', 
        concessionId: '1', 
        cafeteriaId: '1', 
        price: 5, 
        image: 'https://via.placeholder.com/150', 
        concessionName: 'Concession A', 
        cafeteriaName: 'Cafeteria A',
        variations: ['Classic', 'Chili'],
        sizes: ['Regular', 'Footlong'],
        addons: ['Onions', 'Relish']
    },
];

const MenuScreen = ({ navigation, route }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMenuItems, setFilteredMenuItems] = useState(initialMenuItems);
    const [pressedItemId, setPressedItemId] = useState(null); 

    useEffect(() => {
        const { selectedCafeterias, selectedConcessions, priceRange } = route.params || {};
        const [minPrice, maxPrice] = priceRange ? priceRange.split('-').map(Number) : [0, Infinity];

        const filteredItems = initialMenuItems.filter(item => {
            const matchesCafeteria = selectedConcessions ? selectedConcessions.includes(item.concessionId) : true;
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

            return matchesCafeteria && matchesSearch && matchesPrice;
        });

        setFilteredMenuItems(filteredItems);
    }, [route.params, searchTerm]);

    const handlePressIn = (id) => {
        setPressedItemId(id);
    };

    const handlePressOut = () => {
        setPressedItemId(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search menu items..."
                    placeholderTextColor="#999"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => navigation.navigate('FilterMenu')}
                >
                    <Text style={styles.filterButtonText}>Filters</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredMenuItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer, 
                            pressedItemId === item.id && styles.pressedItem
                        ]}
                        onPressIn={() => handlePressIn(item.id)} 
                        onPressOut={handlePressOut}
                        onPress={() => navigation.navigate('ViewMenuItem', { menuItem: item })} 
                    >
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemText}>{item.name} - ₱{item.price}</Text>
                            <Text style={styles.concessionText}>Concession: {item.concessionName}</Text>
                            <Text style={styles.cafeteriaText}>Cafeteria: {item.cafeteriaName}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#444',
        color: '#fff',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
    },
    filterButton: {
        backgroundColor: 'rgb(174,12,46)',
        padding: 10,
        borderRadius: 8,
    },
    filterButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    pressedItem: {
        backgroundColor: '#555', 
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
    },
    itemText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    concessionText: {
        color: '#ccc',
    },
    cafeteriaText: {
        color: '#aaa',
    },
});

export default MenuScreen;
