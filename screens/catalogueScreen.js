import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { addCourseCart, removeCourseCart } from '../redux/slices/cartSlice';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react'

// data imports
import data from '../data/testData';
// components imports
import CourseCatalogue from '../components/courseCatalogue';

const CatalogueScreen = () => {
  // const dispatch = useDispatch();
  // const cartStore = useSelector(state => state.cart.addedCourses);
  // const [addedCourses, setAddedCourses] = useState(cartStore);

  // const handleAddCourse = (course) =>{
  //   setAddedCourses(prevCourses=> [...prevCourses, course]);
  //   dispatch(addCourseCart(course))
  // } 
  // const handleRemoveCourse = (course) =>{
  //   dispatch(removeCourseCart(course.id))
  // }

 
  // if (!addedCourses.some(addedCourse => addedCourse.id === course.id )){
  //   handleAddCourse(course);
  // }>
       

  return (
    <View style={{marginBottom:30}}>
      <FlatList
      data={data}
      renderItem={({item})=> <CourseCatalogue course={item}/>}
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