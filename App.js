// react native imports
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// react navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// redux imports
import store from './redux/store';
import { Provider } from 'react-redux';


// screens imports
import CatalogueScreen from './screens/catalogueScreen';
import CoursesScreen from './screens/coursesScreen';
import CartScreen from './screens/cartScreen';
import PurchaseScreen from './screens/purchaseScreen';
import options from './components/utils'

import { MaterialIcons } from '@expo/vector-icons';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App() {
  const MyDrawer = () =>{
    return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({navigation, route})=> ({
              headerRight:()=>{ // icons à droite 
                const iconAndScreen = route.name === 'Panier' ? {icon:'bookmarks',screen:'Catalogue'} : {icon:'shopping-cart',screen:'Panier'}
                return <MaterialIcons 
                  name={iconAndScreen.icon}
                  size={24} color="green" 
                  style={{marginRight:10}} 
                  onPress={()=>navigation.navigate(iconAndScreen.screen)}
                />
            },
            drawerActiveTintColor:'green',
            drawerInactiveTintColor:'black',
            drawerStyle:{
              width: 210,
            },
          })}
        >
          <Drawer.Screen 
            name="Catalogue" 
            component={CatalogueScreen}
            options={options('bookmarks')}
          />
          <Drawer.Screen 
            name="Panier" 
            component={CartScreen} 
            options={options('shopping-cart')}
          />
          <Drawer.Screen 
            name="Mes Achats" 
            component={PurchaseScreen}
            options={options('payments')}
          />
          <Drawer.Screen 
            name="Mes Cours" 
            component={CoursesScreen}
            options={options('book')}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <Provider store={store}> 
      <MyDrawer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },
});
