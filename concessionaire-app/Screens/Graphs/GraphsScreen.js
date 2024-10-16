import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BarChart, PieChart } from 'react-native-chart-kit'

const GraphsScreen = () => {
	// Sample data for the Bar Chart (Monthly Revenue)
	const monthlyData = {
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		datasets: [
			{
				data: [
					12000, 15000, 8000, 17000, 13000, 18000, 22000, 20000, 25000, 23000,
					19000, 21000,
				],
			},
		],
	}

	// Sample data for the Pie Chart (Popular Items)
	const itemPopularityData = [
		{
			name: 'Fries',
			population: 215,
			color: '#ff9999',
			legendFontColor: '#ffffff',
			legendFontSize: 15,
		},
		{
			name: 'Fruit Juice',
			population: 120,
			color: '#66b3ff',
			legendFontColor: '#ffffff',
			legendFontSize: 15,
		},
		{
			name: 'Shawarma',
			population: 90,
			color: '#99ff99',
			legendFontColor: '#ffffff',
			legendFontSize: 15,
		},
		{
			name: 'Burger',
			population: 50,
			color: '#ffcc99',
			legendFontColor: '#ffffff',
			legendFontSize: 15,
		},
	]

	return (
		<View style={styles.screenContainer}>
			<Text style={styles.title}>Graphs Screen</Text>

			<Text style={styles.graphTitle}>Monthly Revenue (PHP)</Text>
			<BarChart
				data={monthlyData}
				width={340}
				height={220}
				chartConfig={{
					backgroundColor: '#2c2c2c',
					backgroundGradientFrom: '#2c2c2c',
					backgroundGradientTo: '#444',
					decimalPlaces: 0,
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				style={styles.chartStyle}
				fromZero={true}
			/>

			<Text style={styles.graphTitle}>Most Popular Items</Text>
			<PieChart
				data={itemPopularityData}
				width={340}
				height={220}
				chartConfig={{
					backgroundColor: '#2c2c2c',
					backgroundGradientFrom: '#2c2c2c',
					backgroundGradientTo: '#444',
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
				}}
				accessor="population"
				backgroundColor="transparent"
				paddingLeft="15"
				absolute
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c2c2c',
		padding: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	graphTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		marginVertical: 10,
	},
	chartStyle: {
		marginVertical: 10,
		borderRadius: 16,
	},
})

export default GraphsScreen
