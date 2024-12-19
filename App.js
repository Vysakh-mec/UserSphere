import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from "./src/screens/UserListScreen"
import  UserDetailsScreen from "./src/screens/UserDetailsScreen"

export default function App() {

  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='userList'>
      <Stack.Screen name='userList' component={UserListScreen} options={{
        headerShown:false,
      }} /> 
      <Stack.Screen name='userDetails' component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

