import { NavigationContainer } from '@react-navigation/native'
import { GlobalProvider } from './Contexts/_GlobalContext'
import AppStack from './StackScreens/_AppStack'
import { StatusBar } from 'react-native'
/* 
GlobalProvider: libraries, contexts, etc.
AppStack: App body
*/
const App = () => {
	return (
		<GlobalProvider>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#2c2c2c"
			/>
			<NavigationContainer>
				<AppStack />
			</NavigationContainer>
		</GlobalProvider>
	)
}

export default App
