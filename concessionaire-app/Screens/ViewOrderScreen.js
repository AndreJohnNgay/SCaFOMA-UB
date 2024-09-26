import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const ViewOrderScreen = ({ route, navigation }) => {
  const { order, setPendingOrders, setAcceptedOrders } = route.params;

  // Function to accept the order
  const acceptOrder = () => {
    setAcceptedOrders(prevOrders => [...prevOrders, { ...order, status: 'accepted' }]);
    setPendingOrders(prevOrders => prevOrders.filter(o => o.id !== order.id));
    navigation.navigate('Orders');
  };

  // Function to decline the order
  const declineOrder = () => {
    Alert.alert(
      "Confirm Decline",
      "Are you sure you want to decline this order?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes", onPress: () => {
            setPendingOrders(prevOrders => prevOrders.filter(o => o.id !== order.id));
            navigation.navigate('Orders');
          }
        }
      ]
    );
  };

  // Function to mark as no show
  const markAsNoShow = () => {
    setAcceptedOrders(prevOrders => 
      prevOrders.map(o => 
        o.id === order.id ? { ...o, status: 'no show' } : o
      )
    );
    navigation.navigate('Orders');
  };

  // Calculate the total price of the order in PHP
  const calculateTotalPrice = () => {
    return order.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.item}</Text>
      <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemDetails}>Size: {item.size}</Text>
      <Text style={styles.itemDetails}>Price: ₱{(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details for {order.customerName}</Text>
      <Text style={styles.subtitle}>Items:</Text>
      <FlatList
        data={order.items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index as key for items
        style={styles.itemList}
      />
      
      <Text style={styles.totalPrice}>Total Price: ₱{calculateTotalPrice()}</Text>
      
      {/* Show buttons only if the order is still pending or accepted */}
      {order.status === 'pending' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.acceptButton} onPress={acceptOrder}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton} onPress={declineOrder}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Show the "Mark as No Show" button for accepted orders */}
      {order.status === 'accepted' && (
        <TouchableOpacity style={styles.noShowButton} onPress={markAsNoShow}>
          <Text style={styles.buttonText}>Mark as No Show</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  itemList: {
    width: '100%',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    color: '#fff',
    fontSize: 14,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgb(174,12,46)',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  acceptButton: {
    backgroundColor: 'rgb(174,12,46)',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  declineButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  noShowButton: {
    backgroundColor: 'rgb(174,12,46)', 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ViewOrderScreen;
