import { useSelector, useDispatch } from'react-redux';
import { removeCourseCart } from '../redux/slices/cartSlice';

import { View, FlatList, Alert} from 'react-native';
import {CartItem, PaymentItem, EmptyCart} from '../components/cartItem';


const CartScreen = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart.addedCourses);

  const handleRemoveCourse = (course) =>{
    Alert.alert(
      'Cours supprimé du panier',
      `Vous avez supprimé le cours ${course.title} du panier.`,
      [
          { text: 'Annuler', onPress: () => console.log('suppression du cours du panier annulée'), style: 'cancel' },
          { text: 'Valider', onPress: () => dispatch(removeCourseCart(course.id))}
      ],
      { cancelable: false }
    );
  }
  if (cartStore.length === 0){
    return <EmptyCart/>
  }
  
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <FlatList
        data={cartStore}
        renderItem={({item})=><CartItem item={item} handleRemoveCourse={handleRemoveCourse}/>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{backgroundColor:'white'}}
      />
      <PaymentItem cartStore={cartStore} />
    </View>
  )
}

export default CartScreen

