import { FlatList, StyleSheet, Text, View } from 'react-native'
// redux: 
import { useSelector } from'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const PurchaseItem = ({item}) => {
  return(
    <View style={styles.container}>        
      <View style={styles.body}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} €</Text>
      </View>
      <View style={styles.footer}>
          <MaterialIcons 
              name="add-circle" 
              size={24} color="green" 
              style={{marginLeft:30}}
              onPress={()=>console.log("purchased")}    
          />
      </View>
    </View>
  )
}

const PurchaseScreen = () => {
  const payedStore = useSelector(state => state.purchase.payedCourses);
  if (payedStore.length === 0){
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Aucun Achats!</Text>
      </View>
  )
  }
  return (
    <FlatList
      data={payedStore}
      renderItem={PurchaseItem}
      keyExtractor={item=>item.id}
    />
  )
}

export default PurchaseScreen

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      padding:10,
      borderRadius:20,
      borderColor:'green',
      borderWidth:2,
      backgroundColor:'white',
      marginVertical:10,
      width:'90%',
      alignSelf: 'center',
      backgroundColor:'`rgba(218, 192, 233,0.2)`',
    },
  payButton:{
      flexDirection:'row',
      justifyContent:'space-around',
      verticalAlign:'center',
      marginTop:20,
      marginLeft:30,
      marginRight:30,
      height:80
    },
  text:{
      fontSize:20, fontWeight:'bold', color:'white', textAlign:'center'
  },
  title:{
      fontSize:20, fontWeight:'bold', textAlign:'center', color:'green',
  },
  price:{
      fontSize:18, fontWeight:'bold', textAlign:'center', color:'black', marginTop:10
  },
  footer:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginTop:20
  },
})