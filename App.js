import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserTable from './component/UserTable/UserTable';
import Home from './component/Home/Home';


export default function App() {
  return (  
    <View>
      <Home></Home>
      <UserTable></UserTable>
    </View>
  );
}

 
