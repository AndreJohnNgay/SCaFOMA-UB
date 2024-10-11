import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const ViewMenuItemScreen = ({ route }) => {
    const { menuItem } = route.params; 
    const navigation = useNavigation(); 

    const [selectedVariation, setSelectedVariation] = useState(menuItem.variations[0]);
    const [selectedSize, setSelectedSize] = useState(menuItem.sizes[0]);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const toggleAddon = (addon) => {
        if (selectedAddons.includes(addon)) {
            setSelectedAddons(selectedAddons.filter(a => a !== addon));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const calculateTotalPrice = () => {
        const addonsPrice = selectedAddons.length * 2; 
        return (menuItem.price + addonsPrice) * quantity;
    };

    const addToCart = () => {
        const cartItem = {
            name: menuItem.name,
            size: selectedSize,
            variation: selectedVariation,
            addons: selectedAddons,
            quantity: quantity,
            totalPrice: calculateTotalPrice(),
        };
        console.log('Item added to cart:', cartItem);
        
        navigation.navigate('Menu');
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: menuItem.image }} style={styles.image} />
            <Text style={styles.itemName}>{menuItem.name}</Text>
            <Text style={styles.cafeteriaText}>Cafeteria: {menuItem.cafeteriaName}</Text>
            <Text style={styles.concessionText}>Concession: {menuItem.concessionName}</Text>

            <Text style={styles.label}>Variation:</Text>
            <TouchableOpacity 
                style={styles.dropdown} 
                onPress={() => setSelectedVariation(prev => 
                    prev === menuItem.variations[0] ? menuItem.variations[1] : menuItem.variations[0]
                )}
            >
                <Text style={styles.dropdownText}>{selectedVariation}</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Size:</Text>
            <TouchableOpacity 
                style={styles.dropdown} 
                onPress={() => setSelectedSize(prev => 
                    prev === menuItem.sizes[0] ? menuItem.sizes[1] : menuItem.sizes[0]
                )}
            >
                <Text style={styles.dropdownText}>{selectedSize}</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Add-ons:</Text>
            <FlatList
                data={menuItem.addons}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[styles.addon, selectedAddons.includes(item) && styles.selectedAddon]} 
                        onPress={() => toggleAddon(item)}
                    >
                        <Text style={styles.addonText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.label}>Quantity:</Text>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => setQuantity(prev => (prev > 1 ? prev - 1 : prev))}>
                    <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(prev => prev + 1)}>
                    <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalPrice}>Total Price: ₱{calculateTotalPrice()}</Text>

            <TouchableOpacity style={styles.orderButton} onPress={addToCart}>
                <Text style={styles.orderButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cafeteriaText: {
        color: '#aaa',
    },
    concessionText: {
        color: '#aaa',
        marginBottom: 10,
    },
    label: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10,
    },
    dropdown: {
        backgroundColor: '#444',
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
    },
    dropdownText: {
        color: '#fff',
    },
    addon: {
        backgroundColor: '#444',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    selectedAddon: {
        backgroundColor: '#555',
    },
    addonText: {
        color: '#fff',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    quantityButton: {
        backgroundColor: '#444',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    quantityText: {
        color: '#fff',
        fontSize: 18,
    },
    totalPrice: {
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        fontWeight: 'bold',
    },
    orderButton: {
        backgroundColor: 'rgb(174,12,46)',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    orderButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ViewMenuItemScreen;
