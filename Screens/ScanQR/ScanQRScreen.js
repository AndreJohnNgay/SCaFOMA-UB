import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

const ScanQRScreen = () => {
  // Sample order details
  const orderDetails = {
    orderId: '123456',
    items: [
      { name: 'Fries', variation: 'Cheese', size: 'Large', amount: 'PHP 150', quantity: 2 },
      { name: 'Shawarma', variation: 'Spicy', size: 'Regular', amount: 'PHP 100', quantity: 1 },
      { name: 'Fruit Juice', variation: 'Mango', size: 'Medium', amount: 'PHP 100', quantity: 1 },
    ],
    totalAmount: 'PHP 350',
  };

  // Sample payment screenshot (replace with your image URL or local asset)
  const paymentScreenshot = 'https://clients.web.com.ph/index.php?rp=/images/kb/50_GCASH-ScreenShot.png';

  const handleCompleteTransaction = () => {
    // Handle transaction completion logic here
    console.log('Transaction completed!');
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.title}>Scan QR Screen</Text>
      
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailTitle}>Order ID:</Text>
        <Text style={styles.orderDetailText}>{orderDetails.orderId}</Text>
      </View>

      <View style={styles.itemsContainer}>
        <Text style={styles.orderDetailTitle}>Items Selected:</Text>
        {orderDetails.items.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            - {item.quantity}x {item.name} ({item.variation}, {item.size}) - {item.amount}
          </Text>
        ))}
      </View>

      <View style={styles.totalAmountContainer}>
        <Text style={styles.orderDetailTitle}>Total Amount:</Text>
        <Text style={styles.totalAmountText}>{orderDetails.totalAmount}</Text>
      </View>

      <View style={styles.screenshotContainer}>
        <Text style={styles.screenshotTitle}>Payment Screenshot:</Text>
        <Image
          source={{ uri: paymentScreenshot }}
          style={styles.screenshotImage}
          resizeMode="contain"
        />
      </View>

      <Button
        title="Complete Transaction"
        onPress={handleCompleteTransaction}
        color="rgb(174,12,46)"
      />
    </ScrollView>
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
  orderDetailsContainer: {
    backgroundColor: '#444', // Box background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  itemsContainer: {
    backgroundColor: '#444', // Box background color for items
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  totalAmountContainer: {
    backgroundColor: '#444', // Box background color for total amount
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#444',
  },
  screenshotContainer: {
    backgroundColor: '#444', // Box background color for screenshot
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#444',
  },
  orderDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  orderDetailText: {
    fontSize: 16,
    color: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
  totalAmountText: {
    fontSize: 18,
    color: '#FFD700',
  },
  screenshotTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  screenshotImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

export default ScanQRScreen;
