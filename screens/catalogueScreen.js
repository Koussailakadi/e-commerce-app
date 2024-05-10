import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { addCourseCart, removeCourseCart } from '../redux/slices/cartSlice';

import { Text, StyleSheet, View, FlatList, Alert } from 'react-native';
import React from 'react'

// data imports
import data from '../data/testData';
// components imports
import CatalogueItem from '../components/catalogueItem';

const CatalogueScreen = () => {
  const dispatch = useDispatch();
  const courseStore = useSelector(state => state.courses.courses);
  const cartStore = useSelector(state => state.cart.addedCourses);
  const [addedCourses, setAddedCourses] = useState(cartStore);

  // mise à jour de la liste des cours ajoutés dans le panier (via cartStore)
  useEffect(()=>{
    setAddedCourses(cartStore)
  },[cartStore])

  const handleAddCourse = (course) =>{
    if (!addedCourses.some(addedCourse => addedCourse.id === course.id )){
      setAddedCourses(prevCourses=> [...prevCourses, course]);
      dispatch(addCourseCart(course));
      // Afficher l'alerte
      Alert.alert(
        'Cours ajouté au panier',
        `Vous avez ajouté le cours ${course.title} au panier.`,
        [
            { text: 'Annuler', onPress: () => dispatch(removeCourseCart(course.id)), style: 'cancel' },
            { text: 'Valider', onPress: () => console.log('Cours ajouté au panier') }
        ],
        { cancelable: false }
    );
    }else{
      Alert.alert(
        'Cours déjà dans le panier',
        `Vous pouvez ajouter d'autres cours au panier.`,   
    )
    }
  }

  if(courseStore.length === 0){
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Catalogue vide!</Text>
      </View>
    )
  }

  return (
    <View style={{flex:1, marginBottom:30}}>
      <FlatList
      data={courseStore}
      renderItem={({item})=> <CatalogueItem course={item} handleAddCourse={()=>handleAddCourse(item)}/>}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{marginBottom:100}}
      />
    </View>
  )
}

export default CatalogueScreen

const styles = StyleSheet.create({
  itemView: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    marginVertical:20,
    padding:10,
    },
})