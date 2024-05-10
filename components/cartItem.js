import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from'react-redux';
import { addCoursePurchased } from '../redux/slices/purchaseSlice';
import { removeCourseCart } from '../redux/slices/cartSlice'

const EmptyCart = () => {
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Panier Vide!</Text>
        </View>
    )
}
const PaymentItem = ({cartStore}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePayment = () => {
    console.log("payment")
    dispatch(addCoursePurchased(cartStore))
    cartStore.forEach(element => {
      dispatch(removeCourseCart(element.id))
    });
    navigation.navigate('Mes Achats')
  }
  return (
    <View style={{backgroundColor:'green',}}>
        <View style={styles.payButton}>
          <Text style={styles.text}>
            Total: {cartStore.reduce((total, course) => total + parseFloat(course.price), 0).toFixed(2)} €
          </Text>
          <MaterialIcons 
            name="payment" 
            size={32} 
            color="white"
            onPress={handlePayment}
          />
        </View>
    </View>
  )
}

const CartItem = ({item, handleRemoveCourse}) => {
    return(
        <View style={styles.container}>        
        <View style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} €</Text>
        </View>
        <View style={styles.footer}>
            <MaterialIcons 
                name="highlight-remove" 
                size={24} color="red" 
                style={{marginLeft:30}}
                onPress={()=>handleRemoveCourse(item)}    
            />
        </View>
      </View>
    )
}

export {CartItem, PaymentItem, EmptyCart}

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