import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { removeCourseCart } from '../redux/slices/cartSlice';

import { StyleSheet, Text, View, FlatList, Alert, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const CoursesScreen = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart.addedCourses);

  const handleRemoveCourse = (course) =>{
     //dispatch(removeCourseCart(item.id))
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

  const renderCourses = ({item}) =>{
    return (
      <View style={styles.container}>        
        <View style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} €</Text>
        </View>
        <View style={styles.footer}>
            <MaterialIcons 
              name="edit-document" 
              size={24} color="green" 
              style={{marginRight:30}}
              onPress={()=>(console.log("edit",item.id))}  
              />
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
  if (cartStore.length === 0){
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Aucun cours!</Text>
      </View>
    )
  } 

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <FlatList
        data={cartStore}
        renderItem={renderCourses}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{backgroundColor:'white'}}
      />
    </View>
  )
}

export default CoursesScreen

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
  header:{   
      overflow: 'hidden',
      height:250,
      width:'100%',
  },
  footer:{
      flexDirection:'row',
      justifyContent:'space-between',
  },
  title:{
    fontSize:20, fontWeight:'bold', textAlign:'center', color:'green',
  },
  price:{
      fontSize:18, fontWeight:'bold', textAlign:'center', color:'black', marginTop:10
  },
  footer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20
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
})