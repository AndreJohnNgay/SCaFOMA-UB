import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';

const GraphsScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  // Sample data for spending over the months
  const spendingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [3000, 5000, 7000, 2000, 4000, 6000, 8000],
        color: (opacity = 1) => `rgba(174, 12, 46, ${opacity})`, // Custom color
        strokeWidth: 2,
      },
    ],
  };

  // Sample data for most ordered items
  const mostOrderedItemsData = {
    labels: ['Pizza', 'Burger', 'Shawarma', 'Fruit Juice', 'Milk Tea'],
    datasets: [
      {
        data: [50, 100, 70, 40, 60],
        color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // Custom color
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Over Time</Text>
      <BarChart
        data={spendingData}
        width={screenWidth - 30} // Responsive width
        height={220}
        chartConfig={{
          backgroundColor: '#2c2c2c',
          backgroundGradientFrom: '#2c2c2c',
          backgroundGradientTo: '#2c2c2c',
          decimalPlaces: 0, // Optional, defaults to 2
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      <Text style={styles.title}>Most Ordered Items</Text>
      <LineChart
        data={mostOrderedItemsData}
        width={screenWidth - 30} // Responsive width
        height={220}
        chartConfig={{
          backgroundColor: '#2c2c2c',
          backgroundGradientFrom: '#2c2c2c',
          backgroundGradientTo: '#2c2c2c',
          decimalPlaces: 0, // Optional, defaults to 2
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
    justifyContent: 'center', // Center contents vertically
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GraphsScreen;
