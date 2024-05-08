import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { addCourseCart, removeCourseCart } from '../redux/slices/cartSlice';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react'

// data imports
import data from '../data/testData';

const CartScreen = () => {
  // const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart.addedCourses);
  // const [addedCourses, setAddedCourses] = useState(cartStore);

  // const handleAddCourse = (course) =>{
  //   setAddedCourses(prevCourses=> [...prevCourses, course]);
  //   dispatch(addCourseCart(course))
  // } 
  // const handleRemoveCourse = (course) =>{
  //   dispatch(removeCourseCart(course.id))
  // }

  const renderCourses = ({item}) =>{
        // if (!addedCourses.some(addedCourse => addedCourse.id === course.id )){
        //   handleAddCourse(course);
        // }
        return (
          <View style={styles.itemView}>
            <Text style={{fontSize:18}}>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )
  }
  
  
  if (cartStore.length === 0){
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Cart is empty</Text>
      </View>
    )
  } 

  return (
    <FlatList
      data={cartStore}
      renderItem={renderCourses}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default CartScreen

const styles = StyleSheet.create({
  itemView: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    marginVertical:20,
    padding:10,
    },
})